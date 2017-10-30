
Pod::Spec.new do |s|

  s.name         = "RNComponentA"
  s.version      = "0.1.0"
  s.summary      = "RNComponentA."

  s.description  = <<-DESC
                Demo for React native module
                   DESC

  s.license      = { :type => "None", :file => "License" }
  s.homepage     = "https://github.com/momirror/RNComponentAPod";
  s.author             = { "momirror" => "471488376@qq.com" }

  s.platform     = :ios, "8.0"

  s.source       = { :git => "https://github.com/momirror/RNComponentAPod.git", :tag => "#{s.version}" }

  s.source_files  = "RNComponentA/Classes/**/*.{h,m}"

  s.dependency 'React'

end
