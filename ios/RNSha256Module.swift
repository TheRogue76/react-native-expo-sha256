import ExpoModulesCore
import CryptoKit

extension Digest {
    var bytes: [UInt8] { Array(makeIterator()) }
    var data: Data { Data(bytes) }

    var hexStr: String {
        bytes.map { String(format: "%02X", $0) }.joined()
    }
}

public class RNSha256Module: Module {
    public func definition() -> ModuleDefinition {
        Name("RNSha256")
        
        Function("md5") { (input: String) -> String in
            guard let data = input.data(using: .utf8) else { return "" }
            let digest = Insecure.MD5.hash(data: data)
            return digest.hexStr
        }
        
        Function("sha1") { (input: String) -> String in
            guard let data = input.data(using: .utf8) else { return "" }
            let digest = Insecure.SHA1.hash(data: data)
            return digest.hexStr
        }
        
        Function("sha256") { (input: String) -> String in
            guard let data = input.data(using: .utf8) else { return "" }
            let digest = SHA256.hash(data: data)
            return digest.hexStr
        }
        
        Function("sha384") { (input: String) -> String in
            guard let data = input.data(using: .utf8) else { return "" }
            let digest = SHA384.hash(data: data)
            return digest.hexStr
        }
        
        Function("sha512") { (input: String) -> String in
            guard let data = input.data(using: .utf8) else { return "" }
            let digest = SHA512.hash(data: data)
            return digest.hexStr
        }
    }
}
