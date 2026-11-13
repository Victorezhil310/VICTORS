# Proguard / R8 optimization rules for VICTORS
-keep class com.victors.app.** { *; }
-keepclassmembers class * extends android.webkit.WebViewClient {
    public void *(...);
}
-keepclassmembers class * extends android.webkit.WebChromeClient {
    public void *(...);
}
