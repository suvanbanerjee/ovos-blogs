---
title: A Brief History of Open Voice OS
author: Strongthany
type: post
date: 2023-02-15T02:42:55+00:00
url: /a-brief-history-of-open-voice-os/
featured_image: /wp-content/uploads/2023/02/blogheader-01-1.png
slim_seo:
  - 'a:2:{s:5:"title";s:32:"A Brief History of Open Voice OS";s:11:"description";s:85:"a brief history of Open Voice Operating System detailning how we go there from a fork";}'
ss_ss_click_share_count_envelope:
  - 1
ss_ss_click_share_count_linkedin:
  - 2
categories:
  - Technology
tags:
  - OpenVoiceOS
  - Personal assistant
  - Privacy-focused
  - Smart speaker

---
OpenVoiceOS has become one of the leading open source voice assistant systems, though it hasn&#8217;t always been in that position. Through this post, we&#8217;ll explore the history of OVOS, and get some insight into how it grew into what it is today.

We begin back in 2015, not with OVOS itself, but with the start of MycroftAI, which exploded onto the scene when it launched its [Kickstarter for Mark I,][1] their first smart speaker, produced in-house. Mycroft pledged to be different from other voice assistants by focusing on user privacy. This brought their project widespread attention, and led them to meet their crowdfunding goal. Over the next few years, the project passed several important milestones, including the release of the [MycroftAI Mimic TTS][2] (Text-to-Speech) engine in February 2016, and the public release of the Mycroft software, under the GPL license, in May of the same year. By October 2017, the Mycroft-core repositories were [relicensed under Apache 2.0][3], a move that would set the stage for the formation of new, derivative projects.

From there, community involvement continued to grow and expand. Some of these contributions would lay the groundwork for what would eventually become OVOS. Aditya Mehra ([Aix][4]), who released a [Mycroft extension for the Gnome shell][5] in June 2016, became a contributor on the desktop-integration team, and went on to release the [MycroftAI plasmoid][6] for the KDE Plasma desktop in January 2017. The plasmoid project was later incubated under KDE itself, also by Aditya Mehra.

In December 2017, Casimiro Ferreira ([JarbasAI][7]) created the first version of his “[personal backend][8],” which was a reverse-engineered version of MycroftAI&#8217;s backend. Personal Backend was designed to be simple and permissively licensed under Apache 2.0, which made it more accessible to other projects. It continues as an optional component of OpenVoiceOS.

MycroftAI would go on in 2018 to launch its [second Kickstarter][9]. The Mark II was to be a more featured version of their Mark I, complete with a touchscreen to provide a more advanced user interface. Mycroft reached their fundraising goal quickly, promoting the success as an achievement for open source projects and offering hope for fast progress. This sadly would not be the case, due to a number of issues in development. Owing to lackluster progress on the Mark II device, slow response to community-led projects, and other, more technical concerns, multiple downstream partners decided to maintain their own forks of the core software. This enabled them to continue feature development without waiting for the parent project. One such fork was called mycroft-lib, and was originally maintained by Jarbas on behalf of [Chatterbox][10], another related voice assistant project

mycroft-lib, during its early existence, was described not as a fork of Mycroft, but as a superset. It obligated itself to remain compatible with upstream changes, and restricted itself to performance improvements and bug fixes.

September 2018 also saw the creation of [Mycroft-GUI][11] framework currently also used by OVOS which was a collaboration between MycroftAI developers and KDE developers based on KDE frameworks, currently maintained by Aditya Mehra.

In 2019, [MycroftOS][12] was renamed to [OpenVoiceOS &#8211; Mycroft Edition][13], to avoid trademark issues. mycroft-lib was renamed to [Holmes][14] for the same reasons and then adopted by OpenVoiceOS. In October, the MycroftAI backend, called [selene][15], was open-sourced under the AGPL license, but this did not lead to wide adoption due to it&#8217;s complexity and license choice.

Chatterbox focused on it&#8217;s closed-source products and stopped maintaining Holmes, OpenVoiceOS then took the decision of creating [ovos-core][16] and maintaining it themselves.

March 2020 marked a turning point in Mycroft&#8217;s relationship with outside developers, Casimiro Ferreira and Aditya Mehra partnered to create a [VOIP skill][17] and, along with Peter Steenbergen ([j1nx][18]), formed the OpenVoiceOS project, centered around OVOS-Mycroft Edition. Chance ([ChanceNcounter][19]), one of the maintainers of [lingua-franca][20] (mycroft&#8217;s NLP library), and Daniel ([NeonDaniel][21]), developer for NeonAi joined shortly after, the project continues to grow to this day with Parker Seaman ([Strongthany][22]) recently joining the team as community manager. Around the same time, Michael Lewis became the CEO of MycroftAI.

Today, OVOS-Core is being widely adopted by community projects, and is quickly becoming the backbone of the open-source voice assistant movement. After the recent shuttering of MycroftAI due to lack of funding, OpenVoiceOS represents the survival of the Mycroft community, continues the nonprofit side of Mycroft development, and guarantees the future of privacy-focused, open-source voice assistants.  
  
Want to get involved? Check out [code][23], and chat with the community on [Matrix][24]

 [1]: https://www.kickstarter.com/projects/aiforeveryone/mycroft-an-open-source-artificial-intelligence-for
 [2]: https://mycroft.ai/blog/vocalidmimic/
 [3]: https://mycroft.ai/blog/right-license/
 [4]: https://github.com/AIIX
 [5]: https://github.com/AIIX/Mycroft-AI-Gnome-Shell-Extension
 [6]: https://mycroft.ai/blog/mycroft-gets-a-plasmoid
 [7]: https://github.com/JarbasAl
 [8]: https://github.com/OpenVoiceOS/ovos-personal-backend
 [9]: https://www.kickstarter.com/projects/aiforeveryone/mycroft-mark-ii-the-open-voice-assistant?ref=profile_created
 [10]: https://hellochatterbox.com
 [11]: https://mycroft.ai/blog/the-mycroft-gui-the-screen-is-dead-long-live-the-screen/
 [12]: https://www.j1nx.nl/dev-mycroftos-a-bare-minimal-os-based-on-buildroot
 [13]: https://community.mycroft.ai/t/openvoiceos-a-bare-minimal-production-type-of-os-based-on-buildroot/4708/199
 [14]: https://github.com/HelloChatterbox/HolmesIV
 [15]: https://mycroft.ai/blog/open-sourcing-the-mycroft-backend/
 [16]: https://github.com/OpenVoiceOS/ovos-core
 [17]: https://github.com/JarbasSkills/skill-voip
 [18]: https://github.com/j1nx
 [19]: https://github.com/ChanceNCounter
 [20]: https://mycroft.ai/blog/lingua-franca-v0-1-released/
 [21]: https://github.com/NeonDaniel
 [22]: http://github.com/5trongthany/
 [23]: https://github.com/OpenVoiceOS
 [24]: https://matrix.to/#/!XFpdtmgyCoPDxOMPpH:matrix.org?via=matrix.org