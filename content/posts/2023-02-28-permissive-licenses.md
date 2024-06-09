---
title: Why OpenVoiceOS Uses Permissive Licenses
author: Strongthany
type: post
date: 2023-02-28T07:53:27+00:00
draft: true
url: /?p=461
slim_seo:
  - 'a:1:{s:11:"description";s:92:"Explaining the license chosen for OVOS and what that entails for developers and users alike.";}'
categories:
  - Uncategorized

---
Being open; it&#8217;s a key tenant of the Open Voice OS project, so integral that it&#8217;s part of our name. In order to achieve our goal of being open, we have to make sure that the ideology extends to every aspect of the project. It is not simply enough to have our code be open for people to see, the license that defines how that code can be used must carry this same message. In this blog post, we&#8217;ll dive into why we chose the license we did and how that affects how the code can be used.

First, a quick overview for those not familiar with open source licenses. When creating an open source software, it&#8217;s a good idea to put a license on your software. This sets permissions and restrictions to define what people using or developing on the project can do. Without the license, there are no legal definitions to how the code can be used, leading to the risk of it being used outside of the intent of the author, or without proper attribution, etc. As such, it&#8217;s useful to set a license on the software to define it&#8217;s use. Different licenses delineate rights and permissions differently, and there are a [large amount of licenses to chose from.][1]

Some of the licenses available are more permissive than others. What this means is that, while all providing some protection for open source software, they vary in the amount of protection they offer. We at OpenVoiceOS have chosen to license under the more permissive [Apache 2.0 license][2] and . Permissive licenses allow users to modify and distribute the software with minimal restrictions. This approach contrasts with copyleft licenses, which require that any modifications or derivative works be released under the same license terms. By allowing developers to use and modify the software freely, OpenVoiceOS hopes to attract a broad range of contributors who can help improve the platform and develop new applications.

OpenVoiceOS has chosen permissive licenses such as Apache License 2.0 and MIT License for a number of reasons, one of which is the perceived drawbacks of using copyleft licenses. In the case of OpenVoiceOS, the team behind the project wanted to encourage widespread adoption and use of their software, without imposing significant licensing restrictions on developers and businesses.

Another factor that influenced the decision to avoid GPL, a copyleft license, was the complexity of its terms and conditions. GPL is a legal document that is widely interpreted, and its requirements can be difficult to navigate for non-experts. By choosing simpler and more permissive licenses, OpenVoiceOS aimed to make it easier for others to understand and comply with the licensing requirements.

One of the problems with using non-permissive licenses is that when a company cannot fully control how they share their code, they either do not use the software, or instead try hard to &#8220;hijack&#8221; the project by political maneuvering. Permissive licenses, such as the BSD or MIT licenses, allow the company to do whatever they want, and it does not become a part of their interest to &#8220;hijack&#8221; the upstream project or directly influence the way it is going. Companies who benefit from the permissive license often contribute code back to the project because it is in their interest to have their contributions accepted upstream.

What all of this means for develops is that they do not have to worry as much about making sure they are in compliance of how the software can be used. In addition, contributions made by those developers can more easily be integrated back into the original project. All together this creates a symbiotic relationship that enhances the development process for everyone involved. 

Open Voice OS is meant to be a project for everyone, by everyone. We have worked to ensure this is the standard from top to bottom, and will continue that mission as we grow and change. A strong community is foundational to a healthy open source project, so we encourage you to get involved. Come chat with us on our [Matrix chat][3], and check out our [GitHub page][4]!

 [1]: https://opensource.org/licenses/
 [2]: https://github.com/OpenVoiceOS/internal-discussions/blob/main/blog/chatgpt/blogpost_licensing.md
 [3]: https://matrix.to/#/!XFpdtmgyCoPDxOMPpH:matrix.org?via=matrix.org
 [4]: https://github.com/OpenVoiceOS