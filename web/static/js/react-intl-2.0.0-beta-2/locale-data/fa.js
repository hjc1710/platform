(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).fa = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"fa",pluralRuleFunction:function(e,t){return t?"other":e>=0&&1>=e?"one":"other"},fields:{year:{displayName:"سال",relative:{0:"امسال",1:"سال آینده","-1":"سال گذشته"},relativeTime:{future:{one:"{0} سال بعد",other:"{0} سال بعد"},past:{one:"{0} سال پیش",other:"{0} سال پیش"}}},month:{displayName:"ماه",relative:{0:"این ماه",1:"ماه آینده","-1":"ماه گذشته"},relativeTime:{future:{one:"{0} ماه بعد",other:"{0} ماه بعد"},past:{one:"{0} ماه پیش",other:"{0} ماه پیش"}}},day:{displayName:"روز",relative:{0:"امروز",1:"فردا",2:"پس‌فردا","-1":"دیروز","-2":"پریروز"},relativeTime:{future:{one:"{0} روز بعد",other:"{0} روز بعد"},past:{one:"{0} روز پیش",other:"{0} روز پیش"}}},hour:{displayName:"ساعت",relativeTime:{future:{one:"{0} ساعت بعد",other:"{0} ساعت بعد"},past:{one:"{0} ساعت پیش",other:"{0} ساعت پیش"}}},minute:{displayName:"دقیقه",relativeTime:{future:{one:"{0} دقیقه بعد",other:"{0} دقیقه بعد"},past:{one:"{0} دقیقه پیش",other:"{0} دقیقه پیش"}}},second:{displayName:"ثانیه",relative:{0:"اکنون"},relativeTime:{future:{one:"{0} ثانیه بعد",other:"{0} ثانیه بعد"},past:{one:"{0} ثانیه پیش",other:"{0} ثانیه پیش"}}}}},{locale:"fa-AF",parentLocale:"fa"},{locale:"fa-IR",parentLocale:"fa"}];
},{}]},{},[1])(1)
});