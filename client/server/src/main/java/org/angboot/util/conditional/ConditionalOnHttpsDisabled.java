package org.angboot.util.conditional;

import org.angboot.constants.security.SecurityConstant;
import org.angboot.util.AngBootEnv;
import org.springframework.boot.autoconfigure.condition.ConditionOutcome;
import org.springframework.boot.autoconfigure.condition.SpringBootCondition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;
import org.springframework.stereotype.Component;

@Component
public class ConditionalOnHttpsDisabled extends SpringBootCondition {
   @Override
   public ConditionOutcome getMatchOutcome(ConditionContext context, AnnotatedTypeMetadata metadata) {
      boolean isHttpsDisabled = !AngBootEnv.getBoolean(SecurityConstant.HTTPS_ENABLED_KEY);
      return new ConditionOutcome(isHttpsDisabled, "https disabled: " + isHttpsDisabled);
   }
}
