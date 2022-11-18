package com.nasirimehr.sha256

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.security.MessageDigest

class RNSha256Module : Module() {
  private fun hashString(type: String, input: String): String {
    val HEX_CHARS = "0123456789ABCDEF"
    val bytes = MessageDigest
      .getInstance(type)
      .digest(input.toByteArray())
    val result = StringBuilder(bytes.size * 2)

    bytes.forEach {
      val i = it.toInt()
      result.append(HEX_CHARS[i shr 4 and 0x0f])
      result.append(HEX_CHARS[i and 0x0f])
    }

    return result.toString()
  }
  override fun definition() = ModuleDefinition {
    Name("RNSha256")

    Function("md5") {input:String ->
      return@Function hashString("MD5",input)
    }

    Function("sha1") {input:String ->
      return@Function hashString("SHA-1",input)
    }

    Function("sha256") {input:String ->
      return@Function hashString("SHA-256",input)
    }

    Function("sha384") {input:String ->
      return@Function hashString("SHA-384",input)
    }

    Function("sha512") {input:String ->
      return@Function hashString("SHA-512",input)
    }
  }
}
