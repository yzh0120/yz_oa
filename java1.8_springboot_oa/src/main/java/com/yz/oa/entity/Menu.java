package com.yz.oa.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.baomidou.mybatisplus.annotation.TableField;
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
@EqualsAndHashCode(callSuper = false)
public class Menu  implements Serializable {

    private static final long serialVersionUID = 1L;
    @TableId(value = "id")
    private String id;

    private String parentId;

    private String routeName;

    private String routePath;

    private String routeTitle;

    private String routeFilePath;

    private Integer showOnMenu;

    @TableField(exist = false)
    private List<Menu> children = new ArrayList<>();


}
