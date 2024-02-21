package com.example.share.service;

import org.springframework.stereotype.Service;

@Service
public class GoogleLoginService {

    public void socialLogin(String code, String registrationId){
        System.out.println("code ::" + code);
        System.out.println("registrationId ::" + registrationId);
    }


}
