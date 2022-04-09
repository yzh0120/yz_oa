import Cookie from 'js-cookie'



export function set(key,value,expires = 0){
    return Cookie.set(key, value,{ expires:  new Date(expires) } )
}

export function get(key){
    return Cookie.get(key)

}

export function remove(name) {
    return Cookie.remove(name)
  }

// 
// 