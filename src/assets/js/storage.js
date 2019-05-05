import React from 'react';
import { AsyncStorage } from 'react-native';

// 存储localStorage
export const setLocalStorage = async (name, content) => {
	try {
		if(!name) return;
		if(typeof content !== 'string') {
			content = JSON.stringify(content);
		}
		await AsyncStorage.setItem(name, content);
		console.log('保存成功');
	} catch(error){
		console.log('保存失败');
	}
};

// 获取localStorage
export const getLocalStorage = async (name) => {
	if(!name) return;
	try {
		let value = await AsyncStorage.getItem(name);
		if(value) {
            console.log('获取成功');
			return value;
		} else {
			console.log('获取失败');
			return '';
		}
	} catch(e) {
		console.log('获取失败');
		return '';
	}
};

// 删除localStorage
export const removeLocalStorage = async (name) => {
	try {
		if(!name) return;
        await AsyncStorage.removeItem(name);
        console.log('移除成功');
    } catch (error) {
        console.log('移除失败');
    }

};