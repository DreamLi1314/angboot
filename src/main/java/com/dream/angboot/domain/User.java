package com.dream.angboot.domain;

import lombok.*;

import java.io.Serializable;

@ToString(exclude = {"password"})
@Getter(value = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode
public class User implements Serializable {
   private Integer id;
   @NonNull
   private String name;
   @NonNull
   private String password;
   private boolean enable;
}
