package com.yz.oa.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.baomidou.mybatisplus.annotation.TableId;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class User  implements Serializable {

    //private static final long id = 1L;//serialVersionUID
    @TableId(value = "id")
    private String id;

    private String username;

    //使用@JsonIgnore注解，忽略此属性，前端不会拿到该属性
    @JsonIgnore
    private String password;

    private Integer age;

    private Integer sex;

    private String phone;

    private String email;

    private LocalDateTime lastLoginTime;

    private LocalDateTime registrationTime;


}
