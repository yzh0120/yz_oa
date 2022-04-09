package com.yz.oa.mapper;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yz.oa.entity.Menu;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.stereotype.Repository;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author yz
 * @since 2022-04-09
 */
@Repository
public interface MenuMapper extends BaseMapper<Menu> {

    Page<Menu> selectPageVO(Page<Menu> page, String routeTitle);
}
