package com.yz.oa.entity;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private String name;

    private Integer age;

    private Integer sex;

    private String phone;

    private String email;

    private LocalDateTime lastLoginTime;

    private LocalDateTime registrationTime;


}
