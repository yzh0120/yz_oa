
//元素是否在可视区内
export default function(el,fatherViewDom, onlyShowSome = true) {
			if(!el){return}
		      const { top, left, bottom, right } = el.getBoundingClientRect();//getBoundingClientRect()永远都是相对于window
		      // const { innerHeight, innerWidth } = window;	
			  const {clientHeight,clientWidth} = fatherViewDom
			  
			  const clientTop = fatherViewDom.getBoundingClientRect().top
			  const clientLeft = fatherViewDom.getBoundingClientRect().left
			  
			  const computedHeight = clientHeight + clientTop
			  const computedWidth = clientWidth + clientLeft
			  
			  if(onlyShowSome){
				  if (el.offsetHeight >= clientHeight && el.offsetWidth >= clientWidth) {//元素高度 大于等于 可视区高度 并且 元素宽度 大于等于可视区宽度
				  				 
				  	// 第一种情况 窗口在元素的中间, 元素高度 大于等于 可视区高度 并且 元素宽度 大于等于可视区宽度
				  	return  (top <= clientTop && bottom >= computedHeight && left <= clientLeft && right >= computedWidth)
				  	|| onlyShowOne(top,left,bottom,right,computedHeight,computedWidth,clientTop,clientLeft)
				    
				  } else if(el.offsetWidth >= clientWidth){//元素宽度大于等于 可视区 宽度,但是 元素高度 小于等于 可视区高度
				  	return (
				  	( (left <= clientTop && right >= computedWidth) && ( top >= clientLeft && bottom <= computedHeight) )// 这是可视区 在元素中间
				  	|| ShowSome(top,left,bottom,right,computedHeight,computedWidth,clientTop,clientLeft)
				  	)
				  }else if(el.offsetHeight >= clientHeight){//元素高度 大于等于 可视区高度 ,但元素宽度 小于可视区宽度
				  	return (
				  	( (top <= clientTop && bottom >= computedHeight) && ( left >= clientLeft && right<= computedWidth) )// 这是可视区 在元素中间
				  	|| ShowSome(top,left,bottom,right,computedHeight,computedWidth,clientTop,clientLeft)
				  	)
				  }else {//dom比可视区小 上下左右完全要显示在可是区域内
				    return ShowSome(top,left,bottom,right,computedHeight,computedWidth,clientTop,clientLeft)
				  }
			  }else{//子元素必须完全在父容器内显示
				  return (
				            top >= clientTop && left >= clientLeft && bottom <= computedHeight && right <= computedWidth
				          );
			  }
		        
		
		    }
			
			
function ShowSome(top,left,bottom,right,computedHeight,computedWidth,clientTop,clientLeft){
				return (
				  ((top > clientTop && top < computedHeight) || (bottom > clientTop && bottom < computedHeight))
										 &&
				  ((left > clientLeft && left < computedWidth) ||(right > clientLeft && right < computedWidth))
				);
			}
function onlyShowOne(top,left,bottom,right,computedHeight,computedWidth,clientTop,clientLeft){
	return (
	  (top > clientTop && top < computedHeight) 
	  || (bottom > clientTop && bottom < computedHeight)
	  ||(left > clientLeft && left < computedWidth) 
	  ||(right > clientLeft && right < computedWidth)
	);
}