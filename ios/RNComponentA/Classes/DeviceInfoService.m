//
//  DeviceInfoService.m
//  RNComponentA
//
//  Created by mo shanping on 2017/10/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "DeviceInfoService.h"

@implementation DeviceInfoService

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceInfo:(RCTResponseSenderBlock)callback) {
  RCTLogInfo(@"get deivce info");
  callback(@[[NSNull null],@"这是一台iOS设备"]);
}

@end
