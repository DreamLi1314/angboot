package com.dream.angboot.authority.service;

import com.dream.angboot.authority.model.SecurityConstant;
import com.dream.angboot.domain.User;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service("userDetailsService")
public class AngBootUserDetailsService implements UserDetailsService {

   @Override
   public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      List<UserDetails> users = this.loadUsersByUsername(username);
      if (users.size() == 0) {
         this.logger.debug("Query returned no results for user '" + username + "'");
         throw new UsernameNotFoundException(this.messages.getMessage("JdbcDaoImpl.notFound", new Object[]{username}, "Username {0} not found"));
      } else {
         UserDetails user = users.get(0);
         Set<GrantedAuthority> dbAuthsSet = new HashSet();
         dbAuthsSet.addAll(this.loadUserAuthorities(user.getUsername()));

         List<GrantedAuthority> dbAuths = new ArrayList(dbAuthsSet);

         if (dbAuths.size() == 0) {
            this.logger.debug("User '" + username + "' has no authorities and will be treated as 'not found'");
            throw new UsernameNotFoundException(this.messages.getMessage("JdbcDaoImpl.noAuthority", new Object[]{username}, "User {0} has no GrantedAuthority"));
         } else {
            return this.createUserDetails(username, user, dbAuths);
         }
      }
   }

   private List<UserDetails> loadUsersByUsername(String username) {
      List<User> users = this.userService.getUserByName(username);

      return users.stream()
         .map(user -> new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), user.isEnable(), true, true, true, AuthorityUtils.NO_AUTHORITIES))
         .collect(Collectors.toList());
   }

   private List<GrantedAuthority> loadUserAuthorities(String username) {
      return authorizationService.getAuthenticationByName(username).stream()
         .map(authorization -> new SimpleGrantedAuthority(SecurityConstant.ROLE_PREFIX + authorization.getAuthority()))
         .collect(Collectors.toList());
   }

   protected UserDetails createUserDetails(String username, UserDetails userFromUserQuery, List<GrantedAuthority> combinedAuthorities) {
      return new org.springframework.security.core.userdetails.User(username, userFromUserQuery.getPassword(), userFromUserQuery.isEnabled(), true, true, true, combinedAuthorities);
   }

   @Autowired
   private UserService userService;
   @Autowired
   private AuthorizationService authorizationService;

   private MessageSourceAccessor messages = SpringSecurityMessageSource.getAccessor();

   private final Log logger = LogFactory.getLog(this.getClass());
}
