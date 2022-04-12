package com.yz.oa.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author yz
 * @since 2022-04-12
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class ScopeBtn implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id")
    private String id;

    private String menuId;

//    @TableField("enCode")
    private String enCode;

    private String name;

    private String remark;


}
