package com.yz.oa.utils.encryptionAndDecryption;

import cn.hutool.crypto.SecureUtil;
import cn.hutool.crypto.symmetric.AES;
import lombok.Data;

@Data
public class Aes {
//    //加密内容
//    private String content;
//    //解密内容
//    private byte[] decryptContent;

    //构建
//    private AES aes = SecureUtil.aes("1234567891234567".getBytes());

//    public Aes(String content){
//        this.content = content;
//    }

    private static AES aes = SecureUtil.aes("1234567891234567".getBytes());

    //加密
    public static byte[] encrypt(String contentString){
        return  aes.encrypt(contentString);
    }

    //解密
    public static String decrypt(byte[] contentByte){
        return  new String(aes.decrypt(contentByte));
    }


    //16解密为原字符串
    public static String decryptStr(byte[] contentByte){
        return  aes.decryptStr(contentByte);
    }

}
/*

Java使用Hutool实现AES、DES加密解密
* https://blog.csdn.net/weixin_34026484/article/details/91687607?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3.pc_relevant_antiscanv2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3.pc_relevant_antiscanv2&utm_relevant_index=6
*
*
* */