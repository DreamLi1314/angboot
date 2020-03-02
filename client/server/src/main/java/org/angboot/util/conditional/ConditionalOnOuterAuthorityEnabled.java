/*
 * Copyright (c) 2019, AngBoot Technology Corp, All Rights Reserved.
 *
 * The software and information contained herein are copyrighted and
 * proprietary to AngBoot Technology Corp. This software is furnished
 * pursuant to a written license agreement and may be used, copied,
 * transmitted, and stored only in accordance with the terms of such
 * license and with the inclusion of the above copyright notice. Please
 * refer to the file "COPYRIGHT" for further copyright and licensing
 * information. This software and information or any other copies
 * thereof may not be provided or otherwise made available to any other
 * person.
 */
package org.angboot.util.conditional;

import org.angboot.constants.security.SecurityConstant;
import org.angboot.util.AngBootEnv;
import org.springframework.boot.autoconfigure.condition.ConditionOutcome;
import org.springframework.boot.autoconfigure.condition.SpringBootCondition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;
import org.springframework.stereotype.Component;

@Component
public class ConditionalOnOuterAuthorityEnabled extends SpringBootCondition {
   @Override
   public ConditionOutcome getMatchOutcome(ConditionContext context, AnnotatedTypeMetadata metadata) {
      boolean outerAuthority = ConditionalOnOuterAuthorityEnabled.isOuterAuthorityEnabled();

      return new ConditionOutcome(outerAuthority, "out authority enabled: " + outerAuthority);
   }

   public static boolean isOuterAuthorityEnabled() {
      return AngBootEnv.getBoolean(SecurityConstant.OUTER_AUTHORITY_ENABLED_KEY);
   }
}
