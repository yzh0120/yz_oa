package com.yz.oa.entity;

import java.time.LocalDateTime;

import com.baomidou.mybatisplus.annotation.TableId;
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
public class User  {

    //private static final long id = 1L;//serialVersionUID
    @TableId(value = "id")
    private String id;

    private String username;

    private String password;

    private Integer age;

    private Integer sex;

    private String phone;

    private String email;

    private LocalDateTime lastLoginTime;

    private LocalDateTime registrationTime;


}
