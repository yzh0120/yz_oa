package com.yz.oa.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class BaseEntity {
   // @TableId(value = "id", type = IdType.AUTO)
   @TableId(value = "id")
    private Long id;
}
