package org.angboot.util.conditional;

import org.angboot.constants.security.SecurityConstant;
import org.angboot.util.AngBootEnv;
import org.springframework.boot.autoconfigure.condition.ConditionOutcome;
import org.springframework.boot.autoconfigure.condition.SpringBootCondition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;
import org.springframework.stereotype.Component;

@Component
public class ConditionalOnHttpsEnabled extends SpringBootCondition {
   @Override
   public ConditionOutcome getMatchOutcome(ConditionContext context, AnnotatedTypeMetadata metadata) {
      boolean isHttpsEnabled = AngBootEnv.getBoolean(SecurityConstant.HTTPS_ENABLED_KEY);
      return new ConditionOutcome(isHttpsEnabled, "https enabled: " + isHttpsEnabled);
   }
}
