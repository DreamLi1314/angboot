package com.dream.angboot.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
public class Authorization {
   @NonNull
   private String name;
   private String authority;
}
