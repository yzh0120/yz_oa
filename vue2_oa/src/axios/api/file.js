import { get,post } from "@/axios/request";
import axios from 'axios';
import * as Cookie from "@/tools/cookjs.js";
import {
  Message,
  MessageBox
} from 'element-ui';

/**
 * 封装download下载文件流
 * @param url
 * @param title
 * @returns {Promise}
 */

export function download(params = {},path ) {
  let baseURL = process.env.VUE_APP_BASE_API;
  let headers = {
    // 'Authorization': "Bearer " + Cookie.get("token")
    "Authorization": Cookie.get("token") ? Cookie.get("token"):undefined,
  }

  let url = ""
 //  if (!path) {
 //    // return window.open(params.fileUrl)//后端抛出的下载链接
	// if (/.xls|.xlsx|.doc|.docx|.ppt|.pptx/g.test(params.fileUrl)) {
	//   var ele = `
	// 			   <iframe src='https://view.officeapps.live.com/op/view.aspx?src=${params.fileUrl}' width='100%' height='100%' frameborder='1'>
	// 			   </iframe>
	// 		   `;
	//   var newwindow = window.open(params.fileUrl, "_blank", '');
	//   newwindow.document.write(ele);
	// } else {
	//   window.open(params.fileUrl)
	// }
	// return;
 //  }else{
	//   url = path//文件流
 //  }
 
 if (!path) {//预览
     // return location.href = params.fileUrl
     return window.open(params.fileUrl)
   }else{//文件流
	   url = path
   }

let msg = Message({
    message: "正在下载文件，请稍等",
    type: 'warning',
    duration: 0
  })
  
  return new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: url,
        baseURL: baseURL,
        params: params,
        responseType: 'blob',
        headers: headers
      })
      .then(response => {
		  // 兼容blob下载出错json提示
		          if (response.request.responseType === 'blob' && response.data instanceof Blob && response.data.type && response.data.type.toLowerCase().indexOf('json') != -1) {
		            reject("blob下载出错json提示")
		            // 兼容blob下载出错json提示
		            let reader = new FileReader()
		            reader.onload = () => {
		              response.data = JSON.parse(reader.result);
		  
		              Message({
		                message: response.data.info,
		                type: 'warning',
		                duration: 2000
		              })
		              // resolve(Promise.reject(response.data.info))
		            }
		  
		            reader.onerror = () => {
		              // reject(response.data.info)
		            }
		  
		            reader.readAsText(response.data)
		            // 兼容blob下载出错json提示
		  
		          }
				  
		msg.close();
        let blob = new Blob([response.data]);
        let objectUrl = URL.createObjectURL(blob);

        let link = document.createElement("a");
        link.style.display = "none";
        link.href = objectUrl;
        // console.log(response.headers, 'response.headers["content-disposition"]') //["Content-Disposition"]
        link.setAttribute("download", decodeURIComponent(response.headers["content-disposition"].split("filename=")[1]));
        document.body.appendChild(link);
        link.click();
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 删除文件
 * @param {*} data 
 * @returns 
 */
// export function del(data) {
//   return downService({
//     url: "/v1/base/file/delete",
//     method: "post",
//     data: data
//   })
// }
export function del(data, other) {
  return post('file/delete', data, other)
}

/**
 * folderId获取文件列表
 * @param {*} data 
 * @returns 
 */
// export function getFileListByFolderId(data = {}) {
//   return downService({
//     url: "file/getFileListByFolderId",
//     method: "get",
//     params: data
//   })
// }

export function getFileListByFolderId(data, other) {
  return get('file/getFileListByFolderId', data, other)
}
