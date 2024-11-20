// package com.silent

// import android.app.usage.UsageStats
// import android.app.usage.UsageStatsManager
// import android.content.Context
// import com.facebook.react.bridge.Promise
// import com.facebook.react.bridge.ReactApplicationContext
// import com.facebook.react.bridge.ReactContextBaseJavaModule
// import com.facebook.react.bridge.ReactMethod
// import org.json.JSONArray
// import org.json.JSONObject
// import java.util.Calendar

// class AppUsageModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

//     override fun getName(): String {
//         return "AppUsageModule"
//     }

//     @ReactMethod
//     fun getAppUsageData(promise: Promise) {
//         val usageStatsManager = reactApplicationContext.getSystemService(Context.USAGE_STATS_SERVICE) as? UsageStatsManager
//         if (usageStatsManager == null) {
//             promise.reject("Error", "UsageStatsManager not available.")
//             return
//         }

//         val calendar = Calendar.getInstance()
//         calendar.add(Calendar.DAY_OF_YEAR, -1)
//         val startTime = calendar.timeInMillis
//         val endTime = System.currentTimeMillis()

//         val usageStatsList = usageStatsManager.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, startTime, endTime)
//         if (usageStatsList.isNullOrEmpty()) {
//             promise.reject("Error", "No usage stats available. Check permissions.")
//             return
//         }

//         try {
//             val result = JSONArray()
//             for (usageStats in usageStatsList) {
//                 val appData = JSONObject()
//                 appData.put("packageName", usageStats.packageName)
//                 appData.put("timeSpent", usageStats.totalTimeInForeground)
//                 result.put(appData)
//             }
//             promise.resolve(result.toString())
//         } catch (e: Exception) {
//             promise.reject("Error", e.message)
//         }
//     }
// }
