import React, { useRef, useState } from 'react';

import "./Section2.css";

import fiveStars from "../images/five_star.png";
import { Col, Container, Row } from "react-bootstrap";

import Slider from "react-slick";
import Card from "react-bootstrap/Card";

const Section2 = () => {
    let sliderRef = useRef(null);

    // Define button data with labels and associated cards
    const buttonData = [
        {
            label: 'الاتصال المؤسسي والإعلامي',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7b/7e63f07ef811e89e12afdbb67ea21e/CourseraLogo.jpg",
                    title: 'Communication Strategies for a Virtual Age',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/communication-strategies-virtual-age?authProvider=cgbqatar&source=search',
                    description: 'This course will act as an overview on several concepts each of which could be a course of their own and our goal is to give you tools that you can practice and perfect on your own.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/fc/42e1c97ab047488fe59cc4c453cf51/image-5-.jpeg",
                    title: 'Principles of Public Relations',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/principles-of-public-relations?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'In this course, learners are exposed to an overview of public relations principles and theories relevant to practice.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/28/508290849411e6a3aadba2bfb17e80/Fotolia_86463531_Subscription_XXL-1200.jpg",
                    title: 'Intercultural Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/intercultural?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This MOOC explores different aspects of intercultural management, including teams, leadership, Human Resource Management, marketing and negotiations',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/8e/6192d98ff642f0b1c80fa183e7dbc4/Slide10.jpg",
                    title: 'Research Methodologies',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/research-methodologies?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course focuses on research methodologies.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/6d/f47ba064c611e6b40ae537a55e6713/iStock_24181440_XLARGE_square.jpg",
                    title: 'مقدمة عن مخاطبة الجمهور - باللغة العربية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/public-speaking-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تمنحك هذه الدورة التدريبية نموذجًا موثوقًا لإعداد العروض التقديمية الفعالة وتقديمها',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/cc/add8e1294b46599a23e519dffa93f4/GIES_Icon_B.png",
                    title: 'مبادئ الإعلام والتسويق الرقمي',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/marketing-channels-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة التدريبية، ستتعرف على تأثيرات التقنيات الرقمية على إستراتيجيات وممارسات التواصل التسويقي',
                }
            ]
        },
        {
            label: 'القيادة والإدارة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/2e/47b8d7348c48998a69f0a07b7ad7e9/Logo_Boyd_ConnectedLeadership_2.png",
                    title: 'Connected Leadership',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/connected-leadership?authProvider=cgbqatar&source=search',
                    description: 'This course is designed to maximize your ability to create change at the individual, team and system levels. ',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/48/cdef7ad117457bb1d2712791bc54e2/shutterstock_1698393829.jpg",
                    title: 'Leadership Skills',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/leadershipskills?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course provides a foundation for leadership practice and aims to take you on a journey of self-discovery.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0c/9d4ccf300340389a4607b82e9b2b95/MicrosoftTeams-image-88-.png",
                    title: 'Principles of Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/principles-of-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Team leads, managers, and entrepreneurs must juggle team citizenship and leadership, ethics, strategy, and projects with their work in their area of expertise. ',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c5/88e030450e11e7ba8f3d406635ba9d/CS_1200x1200.jpg",
                    title: 'Corporate Strategy',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corporatestrategy?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Corporate strategy is the strategy a firm uses to compete across multiple businesses.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0e/0e73bf925a44e38ad880408a80222e/shutterstock_2127829151.jpg",
                    title: 'أساسيات الإدارة الرشيقة | Lean Management Fundamentals',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/lean-management-fundamentals?authProvider=cgbqatar&collectionId=05tnc',
                    smallImageUrl: fiveStars,
                    description: 'إذا كنت من المهتمين بإتقان أساسيات الإدارة الرشيقة وامتلاك القدرة على التحكم في برمجتك وتصرفاتك أو كان مجال عملك يتطلب إتقان تلك المهارات وتوظيفها في سياق عملك، فهذه الدورة ستكون مثالية لإغناء خبرتك وتطوير مهاراتك بشكل فعال ومؤثر.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c2/22de19942e40e594fe5afe7b2f7291/shutterstock_1757465384.jpg",
                    title: 'كيفية بناء منظمة متعلمة|How to Build a Learning Organization',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/how-to-build-a-learning-organization?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'إذا كنت من المهتمين بفهم كيفية بناء منظمة متعلمة، أو كان مجال عملك يتطلب توظيف ذلك في سياق عملك، فهذه الدورة ستكون مثالية لإغناء خبرتك وتطوير مهاراتك بشكل فعال ومؤثر.',
                }
            ]
        },
        {
            label: 'ريادة الاعمال والابتكار',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/39/592330e82011e7a5ce4de7f262d3c0/5-critical-components-to-advance-a-sustainable-economy-650x650.jpg",
                    title: 'Corporate Sustainability. Understanding and Seizing the Strategic Opportunity',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corp-sustainability?authProvider=cgbqatar&source=search',
                    description: 'The achievement of a balanced economic, social and environmental development - as expressed in the UN Agenda 2030 for Sustainable Development - is recognized as one of the major challenges humanity is facing today. ',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/f3/8fcde0da4311e5b69a51935a618448/logo.jpg",
                    title: 'Innovation Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/innovation-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Go on a nine-week journey through innovation management concepts, theories of idea generation, selection, strategy formulation and implementation in this MOOC in Innovation Management.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png",
                    title: 'Innovation Through Design: Think, Make, Break, Repeat',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/innovation-through-design?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The evolution of design has seen it become a discipline no longer limited to the concerns of a singular, specific domain and develop to become a pathway for solving complex, nonlinear problems.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d8/329c306c2611e4bc69f1dbb9888199/MCOF_MOOC_course_logo.jpg",
                    title: 'Managing the Company of the Future',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/company-future-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The aim of the course is to provide you with a comprehensive framework for understanding both the traditional principles of management inside companies today as well as the alternative principles that are becoming increasingly important.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/04/fc1d99ff0340089e80e94b9258e8cc/shutterstock_574154995.jpg",
                    title: 'نماذج الابتكار | Innovation Models',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/innovation-models-?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'إذا كنت من المهتمين بإتقان استيعاب والتعامل مع نماذج الابتكار، أو كان مجال عملك يتطلب إتقان تلك المهارات وتوظيفها في سياق عملك، فهذه الدورة ستكون مثالية',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/fa/e15e80504811e6bcaf7158d37ab7ca/LightBulb.jpg",
                    title: 'صياغة الأفكار المحفِّزة على الابتكار',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/uva-darden-design-thinking-innovation-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة، نقدم لكم نظرة عامة حول صياغة الأفكار ونتعامل مع نموذج يحتوي على أربعة أسئلة رئيسية وأدوات عديدة لمساعدتك على فهم أساليب صياغة الأفكار باعتبارها منهجًا لحل المشاكل.',
                }
            ]
        },
        {
            label: 'الصحة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera.s3.amazonaws.com/topics/humanphysio/large-icon.png",
                    title: 'Introductory Human Physiology',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/physiology?authProvider=cgbqatar&source=search',
                    description: 'Explore the fascinating world of human physiology and learn about the body\'s organ systems, their functions, and how they maintain health.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/04/71a6b0423011e7afe52f33f45e3daf/run-2087056__480.jpg",
                    title: 'Science of Exercise',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/science-exercise?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Learners who complete Science of Exercise will have an improved physiological understanding of how your body responds to exercise, and will be able to identify behaviors, choices, and environments that impact your health and training.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/55/8d2e309e6811e3bf47177a6a987fca/Vital-Signs-1.png",
                    title: 'Vital Signs: Understanding What the Body Is Telling Us',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/vital-signs?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The vital signs – heart rate, blood pressure, body temperature, respiration rate, and pain – communicate important information about the physiological status of the human body.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/56/e4ffe9d7ae4b7483a877c30592c16b/FirearmSafety_CourseImage.jpg",
                    title: 'Science of Firearm Injury Prevention Among Children & Teens',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/science-of-firearm-injury-prevention-children-teens?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Firearm injuries are a leading cause of death among children and teens.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0f/4b0a004b1211e7aa5d7f0b94d133cc/PPSY-logo.jpg",
                    title: 'Positive Psychiatry and Mental Health',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/positive-psychiatry?authProvider=cgbqatar&collectionId=1wpr1',
                    smallImageUrl: fiveStars,
                    description: 'In this course, we will explore different aspects of good mental health as well as provide an overview of the major kinds of mental disorders, their causes, treatments and how to seek help and support.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/9a/b2181bbc8843949eb50a174335b2b6/Logo_Saad-74-.jpg",
                    title: 'استخدام الوسائط الرقمية لتعزيز النتائج الصحية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/digital-media-health-outcomes-ar?authProvider=cgbqatar&collectionId=1wpr1',
                    smallImageUrl: fiveStars,
                    description: 'ستُوفِّر الدورة التدريبية "استخدام الوسائط الرقمية لتعزيز النتائج الصحية" تدريبًا لمتخصصي الاتصالات في مجال الصحة للاستفادة من الرؤى الاجتماعية والسلوكية لتصميم الرسائل الصحية عبر الإنترنت وتنفيذها وتقييمها',
                }
            ]
        },
        {
            label: 'التنمية الذاتية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://d15cw65ipctsrr.cloudfront.net/3f/c6f890b0e211e5838af79cb4e6f6c7/shutterstock_252604894-Brian-A-Jackson.jpg",
                    title: 'Career Self-Management Training and Certification Specialization',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/career-brand-management?authProvider=cgbqatar&source=search',
                    description: 'Market yourself professionally. Learn how to develop, manage, and communicate a strong, skills-based career brand in just four courses.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/82/8eca90332611e8af6dcf451148b434/pplogosample.jpg",//cardImgTwo,
                    title: 'Professionalism in an era of change',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/professionalism-in-an-era-of-change?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'In this course we aim to provide you with an insight into how recent societal and technological developments have changed the work of professionals in a variety of professional domains and how this in turn affects professionalism.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/32/71d280dbd711e5a99c292fe2988c4d/Anglin_Sylvia_Rosa-2.jpg",
                    title: 'Career Self-Management Advanced Certification',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/career-fitness?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Market yourself professionally. Learn how to develop, manage, and communicate a strong, skills-based career brand in just four courses.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/23/e19d80a5aa11e5a894ad7ff73294ef/TfC-CourseLogoCourseraFormat-carre__Temp.png",
                    title: 'Become a changemaker, build a career with purpose and impact',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/changemaker?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course is designed to help anyone who wants to make a positive impact on society, but doesn\'t know how.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/db/998fa0b27511e5bfec591131c93482/College-Photos-_OCGR_-010_2.jpg",
                    title: 'Strategic Career Self-Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/strategic-career-self-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'In this course, you will learn how to think strategically and professionally about your career self-management.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/76/1abbbe72954643bd14c858ded781c9/Adapting_Build-your-personal-resilience_2.jpg",
                    title: 'Build personal resilience',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/build-personal-resilience?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course will focus on the nature of stressors facing leaders in today’s work environments and how to deal with them.',
                }
            ]
        },

        {
            label: 'علم البيانات',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/41/763803169e4d31a5e7611bc928124b/Course-Logo.png",
                    title: 'AI For Everyone',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/ai-for-everyone?authProvider=cgbqatar&source=search',
                    description: 'AI is not only for engineers. If you want your organization to become better at using AI, this is the course to tell everyone--especially your non-technical colleagues--to take.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/63/b72069efbc42a689ccd470cfecafd9/unnamed.png",
                    title: 'Introduction to Generative AI',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-generative-ai?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This is an introductory level microlearning course aimed at explaining what Generative AI is, how it is used, and how it differs from traditional machine learning methods.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/fc/c1b8dfbac740999b6256aca490de43/Python-Image.jpg",
                    title: 'Python for Data Science, AI & Development',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/python-for-applied-data-science-ai?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Kickstart your learning of Python with this beginner-friendly self-paced course taught by an expert.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/16/d602b00a6c11e88d594f951694ab88/Data-Science-Orientation.png",
                    title: 'What is Data Science?',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/what-is-datascience?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course is for everyone and teaches concepts like how data scientists use machine learning and deep learning and how companies apply data science in business. ',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c5/8d1efd8864419c856f61f067aa5471/shutterstock_1062915260.jpg",
                    title: 'أساسيات الذكاء الاصطناعي والبيانات الضخمة | AI',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/artificial-intelligence-and-big-data-fundamentals?authProvider=cgbqatar&collectionId=yTm1u',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة هي دورة تمهيدية؛ فهي تلقي الضوء على أساسيات الموضوع بشكل عام بهدف التعريف به وبمحاوره الأساسية التي يجب الإلمام بها',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/f7/9812f978144ce8ac721727bc516cb0/Intro-to-AI-Naimo.jpg",
                    title: 'Introduction to Artificial Intelligence (AI)',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-ai?authProvider=cgbqatar&collectionId=yTm1u',
                    smallImageUrl: fiveStars,
                    description: 'In this course you will learn what Artificial Intelligence (AI) is, explore use cases and applications of AI, understand AI concepts and terms like machine learning, deep learning and neural networks',
                }
            ]
        },
        {
            label: 'تقنية المعلومات',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera_assets.s3.amazonaws.com/enterprise/ent-external-apis-video-promo-image.jpg",
                    title: 'Introduction to Cloud Computing',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-cloud?authProvider=cgbqatar&source=search',
                    description: 'In this course you’ll learn about essential characteristics of cloud computing and emerging technologies supported by cloud.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/a1/4d3f79658647c595a756fba0e715e8/hacker.png",
                    title: 'Introduction to Cybersecurity Tools & Cyber Attacks',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-cybersecurity-cyber-attacks?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course gives you the background needed to understand basic Cybersecurity.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/8d/d412aa0cbc46cfa2288db971a348a7/ITIL4logo800x800.png",
                    title: 'ITIL 4 Exam Preparation',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/itil-4-exam-preparation?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'ITIL® 4 Foundation Test Preparation is designed to introduce learners to the key concepts, terminology, and best practices for creating, and improving the quality of IT services across the IT organization.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/29/6ac823fc7f4f858770d8b4a790112e/Computers-and-Operating-Systems-and-Security-Logo_800x800-01.png",
                    title: 'Introduction to Computers and Operating Systems and Security',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-computers-and-operating-systems-and-security?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course forms part of a series of courses that offers a good starting point for a career in cybersecurity. ',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/c8/e497f0f1ad11e7acdcffe7a1a68190/Course-Logo-1.jpg",
                    title: 'أساسيات الدعم الفني',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/technical-support-fundamentals-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة الأولى في سلسلة لإعداد متدربين على دور إخصائي دعم تقنية المعلومات للمبتدئين، حيث تقدم نظرة شاملة على مواضيع تقنية المعلومات، مثل أجهزة الكمبيوتر والإنترنت وبرامج الكمبيوتر، مع تحضيرك لبرنامج الشهادة المستقبلي.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/b6/2019201a9e11e5ace08b26adce8cb5/Java.png",
                    title: 'برمجة Java: حل المشكلات باستخدام البرامج',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/java-programming-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تعلم برمجة Java لتحسين مهارات حل المشكلات وتصميم الخوارزميات، وتطوير برامج للوصول إلى البيانات، مع إنشاء برنامج يحلل ملفات قيمة مفصولة بفاصلة لتحديد شهرة أسماء المواليد في الولايات المتحدة.',
                }
            ]
        },
        {
            label: 'إدارة الاعمال',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/b8/295de0bb2d11e6ae5ebd9d9b53d2f6/iStock-518599088.jpg",
                    title: 'Six Sigma Principles',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/six-sigma-principles?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    description: 'This course is for you if you are looking to learn more about Six Sigma or refresh your knowledge of the basic components of Six Sigma and Lean.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/80/18af40014611e8bbe40f17ca17e765/Customer-Centric-IT-Square.png",
                    title: 'Customer-Centric IT Strategy',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/uva-darden-customer-centric-it-strategy?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    smallImageUrl: fiveStars,
                    description: 'Use the Business Model Canvas to focus your company strategy and facilitate buy-in from stakeholders',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/26/545919d99043269e2d0079d8a4e227/Course-3-logo_cropped.jpg",
                    title: 'Applied Analytics and Data for Decision Making',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/analytics-data-decisions?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The course begins with a focus on deciphering the root cause of problems through a variety of tools before determining and assessing best-fit solutions. ',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0e/824280901911e8a3407b67db6ba33b/industry-2630319_1920.jpg",
                    title: 'Enterprise Systems',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/enterprise-systems?authProvider=cgbqatar&collectionId=skill~business-process-management&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course provides you with an understanding of what Enterprise Systems (also commonly termed as Enterprise Resource Planning Systems, ERPs) are.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/af/b23aab703b4dafa3056a7723b37c22/Gies-Square-Logo-from-MarCom.jpg",
                    title: 'أسس القيادة اليومية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/everyday-leadership-foundation-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تُقدم هذه الدورة أساسيات القيادة اليومية واتخاذ القرارات، وتركّز على أهمية مهارات القيادة لنجاح المنظمة، مع توفير القدرة على تطبيقها بشكل فعّال وتنظيم العمل الجماعي، كجزء من شهادة الماجستير الدولية في إدارة الأعمال iMBA المُقدمة عبر الإنترنت من جامعة إلينوي.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/38/b3e6f9ec4445b78f18dd8bebfc650e/shutterstock_595576169.jpg",
                    title: 'ما هي الإدارة ولماذا نحتاج إليها |What and Why of Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/the-what-and-why-of-management?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تسلط هذه الدورة الضوء على أهمية الإدارة في نجاح المؤسسات وتقديم لمحة تمهيدية حول مفاهيمها الأساسية، مما يجعلها مثالية للراغبين في فهم أساسيات الإدارة وتطبيقها في مجال العمل لتعزيز الكفاءة والفاعلية.',
                }
            ]
        },
        {
            label: 'الإدارة المكتبية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/67/2cc9d6ffb04b269494791755ad875d/shutterstock_1471857863.jpg",
                    title: 'مهارات إدارة المواهب | Talent Management Skills',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/talent-management-skills?authProvider=cgbqatar&source=search',
                    description: 'تتعرض هذه الدورة لأهمية "رأس المال البشري" كعنصر رئيسي في نجاح الشركات، مع التركيز على مهارات إدارة المواهب والإطار التنظيمي لها، وتقديم مبادئ وأفضل الممارسات في هذا المجال',
                },
                {
                    id: 2,
                    imageUrl: "https://d15cw65ipctsrr.cloudfront.net/1a/2bb79d283a447ca12982eebfc8941a/GoogleG_FullColor_192px_768.png",
                    title: 'Getting started with Google Workspace Specialization',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/specializations/getting-started-with-google-workspace?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This training equips students with the skills they need to become productive with Google Workspace.',
                },
                {
                    id: 3,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8e/ea6b58e1f54001a761b5994580d245/shutterstock_1237494604.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'تقدير تكاليف المنتجات على أساس النشاط',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/professional-certificates/salesforce-sales-operations?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تشرح الدورة التكاليف المباشرة وغير المباشرة في المنشآت، مع تسليط الضوء على أهمية حساب هذه التكاليف لتحديد أسعار المنتجات، وتقديم طريقتين لحساب التكاليف: التقليدية وحساب التكاليف على أساس الأنشطة (ABC).',
                },
                {
                    id: 4,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8e/ea6b58e1f54001a761b5994580d245/shutterstock_1237494604.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'Office Productivity Software and Windows Fundamentals',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/office-productivity-software-windows-fundamentals1?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'As the most used operating system in the world, Windows skills are crucial in today’s workplace.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/6d/6b4b10b26411e5bfec591131c93482/College-Photos-_OCGR_-005_2.jpg",
                    title: 'تطوير تميزك المهني والتدريب الذاتي',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/career-brand-development-self-coaching-ar?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'في هذه الدورة التدريبية، ستتعلم كيفية تعزيز مهاراتك الوظيفية وتطوير إستراتيجيات إدارة الذات، بما في ذلك تنفيذ استراتيجيات الأعمال، وتقييم مهاراتك بشكل شامل، وإنشاء ملف تعريف للكفاءات، وتطوير أدوات فعالة لبناء المهارات وقياس أداء الوظيفة.',
                },
                {
                    id: 6,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8e/ea6b58e1f54001a761b5994580d245/shutterstock_1237494604.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'تقدير تكاليف المنتجات على أساس النشاط',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/activity-based-costing?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تشرح الدورة الفروق بين تكاليف المنشأة الأعمال (تكاليف مباشرة وغير مباشرة)، وتسلط الضوء على أهمية حسابها في تحديد أسعار المنتجات، وتقديم نظرة عامة على مراكز التكلفة وتكلفة الأنشطة (ABC)، مما يجعلها مفيدة لتعزيز مهارات الراغبين في اتقان تقدير تكاليف المنتجات.',
                }
            ]
        },
        {
            label: 'الاقتصاد والمالية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/cc/d29c75169172a7c1b1cdb15bb47b4c/DS_tax.png",
                    title: 'Microeconomics: The Power of Markets',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/microeconomics-part1?authProvider=cgbqatar&source=search',
                    description: 'This course is an introduction to the microeconomic theory of markets: why we have them, how they work, what they accomplish.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/6f/e2514b11a94e01868350b10d65c8a4/Logo_Financial-Markets.png",
                    title: 'Financial Markets',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/financial-markets-global?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'An overview of the ideas, methods, and institutions that permit human society to manage risks and foster enterprise.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/39/e5acd0346611e5b80461999c2a9a44/financial.jpg",
                    title: 'Private Equity and Venture Capital',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/private-equity?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The course deals with the analysis of the private equity and venture capital business.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7b/8786437a134401b5418555c55278fe/GIES_Icon_B.png",
                    title: 'Introduction to Finance: The Basics',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-finance-the-basics?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The Basics course, you will be introduced to the basic concepts needed to understand the financial manager’s decision-making process.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/64/b54121e1844a0fb65db726cf027bef/shutterstock_683387005.jpg",
                    title: 'المبادئ المحاسبية في التقارير والقوائم المالية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/accounting-standards-in-financial-reports-and-statement?authProvider=cgbqatar&collectionId=nfXiL',
                    smallImageUrl: fiveStars,
                    description: 'ستزودك هذه الدورة باطلاع واسع ودقيق على مجموعة من المحاور المتعلقة بهذا الموضوع، مثل: استعراض الحالات المسموح فيها بمخالفة معايير المحاسبة',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/04/ec65a1db2644df9949b5a7a448444e/shutterstock_1790828810.jpg",
                    title: 'إتقان الإدارة المالية | Mastering Financial Management',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/mastering-financial-management?authProvider=cgbqatar&collectionId=nfXiL',
                    smallImageUrl: fiveStars,
                    description: 'حيث ستزودك هذه الدورة باطلاع واسع ودقيق على مجموعة من المحاور المتعلقة بهذا الموضوع، مثل: التعرف على النسب الرئيسية لتحليل السيولة والكفاءة',
                }
            ]
        },

        {
            label: 'الذكاء الاصطناعي',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/41/763803169e4d31a5e7611bc928124b/Course-Logo.png",
                    title: 'AI For Everyone',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/ai-for-everyone?authProvider=cgbqatar&source=search',
                    description: 'AI is not only for engineers. If you want your organization to become better at using AI, this is the course to tell everyone--especially your non-technical colleagues--to take.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/63/b72069efbc42a689ccd470cfecafd9/unnamed.png",
                    title: 'Introduction to Generative AI',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-generative-ai?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This is an introductory level microlearning course aimed at explaining what Generative AI is, how it is used, and how it differs from traditional machine learning methods.',
                },
                {
                    id: 3,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c5/8d1efd8864419c856f61f067aa5471/shutterstock_1062915260.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'أساسيات الذكاء الاصطناعي والبيانات الضخمة | AI',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/artificial-intelligence-and-big-data-fundamentals?authProvider=cgbqatar&collectionId=yTm1u',
                    smallImageUrl: fiveStars,
                    description: 'هذه الدورة هي دورة تمهيدية؛ فهي تلقي الضوء على أساسيات الموضوع بشكل عام بهدف التعريف به وبمحاوره الأساسية التي يجب الإلمام بها',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/f7/9812f978144ce8ac721727bc516cb0/Intro-to-AI-Naimo.jpg",
                    title: 'Introduction to Artificial Intelligence (AI)',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-ai?authProvider=cgbqatar&collectionId=yTm1u',
                    smallImageUrl: fiveStars,
                    description: 'In this course you will learn what Artificial Intelligence (AI) is, explore use cases and applications of AI, understand AI concepts and terms like machine learning, deep learning and neural networks',
                },
                {
                    id: 5,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b2/65f2d3143d48b29c346332efac1118/AI4ESquareLogo.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'الذكاء الاصطناعي للجميع',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/ai-for-everyone-ar?authProvider=cgbqatarstaging&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تعتبر هذه الدورة التدريبية مناسبة لجميع أفراد المؤسسة، بما في ذلك غير المتخصصين في التكنولوجيا، لفهم وتطبيق مفاهيم الذكاء الاصطناعي، حيث تشمل المحتوى النواح النظرية والعملية والتعامل مع الجوانب الأخلاقية والمجتمعية لهذا المجال.',
                },
                {
                    id: 6,
                    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/84/2c670670e54117916b15ba98e56d18/ssyt-aadd-wkhtbr-twSyl-jhz-lshbk-ldhky-42-.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
                    title: 'عمل خطة محتوى بالذكاء الاصطناعي: Canva، ChatGPT، وBlueWillow',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-brnmj-tjryby-8qqdt/learn/creating-a-content-plan-using-artificial-intelligence?authProvider=cgbqatarstaging&source=search',
                    smallImageUrl: fiveStars,
                    description: 'يهدف المشروع إلى تيسير استخدام الذكاء الاصطناعي في إبداع محتوى مبتكر، حيث يستخدم أدوات متنوعة مثل Canva و BlueWillow و ChatGPT لتوليد أفكار وإنشاء صور ومحتوى متناسب، مما يساعد في تحسين الإبداع وتوفير الوقت والجهد للأفراد ذوي الخبرة المتوسطة في كتابة المحتوى والتفاعل مع أدوات الذكاء الاصطناعي.',
                }
            ]
        },
        {
            label: 'التعليم',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/aa/3cd760fcab11e6b2b605357676436e/ut-square-logo_1_.jpg",
                    title: 'University Teaching',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/university-teaching?authProvider=cgbqatar&source=search',
                    description: 'University Teaching is an introductory course in teaching and learning in tertiary education, designed by staff at the Centre for the Enhancement of Teaching and Learning at the University of Hong Kong.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/cb/3c4030d65011e682d8b14e2f0915fa/shutterstock_226881610.jpg",
                    title: 'Get Interactive: Practical Teaching with Technology',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/getinmooc?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course is designed to help you create dynamic, interactive online courses through the use of multimedia tools, student collaboration opportunities, and formative assessment and feedback.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7c/b688204d0211e78ab2675f15822526/BeingATeacher.jpg",
                    title: 'Foundations of Teaching for Learning: Being a Teacher',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/being-a-teacher?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The Foundations of Teaching for Learning programme is for anyone who is teaching, or who would like to teach, in any subject and any context - be it at school, at home or in the workplace.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/bf/e096b4b234426eab389c870f8ef763/UST_1200X1200_300dpi.png",
                    title: 'Uncommon Sense Teaching',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/uncommon-sense-teaching?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This is like no other course on teaching—it weaves late-breaking insights from neuroscience with personal insights from the classroom to provide unexpected, yet practical, new approaches',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/52/6dff15e6f247789eb5dafb9be90cb2/Learning-How-to-Learn-Logo_875X875px.png",
                    title: 'تعّلم كيف تتعلم: أدوات ذهنية قوية لمساعدتك على إتقان موضوعات صعبة',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/learning-how-to-learn-ar?authProvider=cgbqatar&collectionId=hAdZ3',
                    smallImageUrl: fiveStars,
                    description: 'تعلم هذه الدورة كيفية استخدام أساليب فعّالة في التعلم، مقدمة من خبراء في مجالات متنوعة، مع تركيز على استغلال قدرات الدماغ وتقديم تقنيات للتفوق في فهم المواضيع الصعبة وتحقيق التقدم الفعّال',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/eb/bde77b80db4b5784c5106f65b2e81e/Learning-How-to-Learn-Logo.png",
                    title: 'Learning How to Learn: Powerful mental tools to help you master tough subjects',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/learning-how-to-learn?authProvider=cgbqatar&collectionId=hAdZ3',
                    smallImageUrl: fiveStars,
                    description: 'This course gives you easy access to the invaluable learning techniques used by experts in art, music, literature, math, science, sports, and many other disciplines',
                }
            ]
        },
        {
            label: 'الهندسة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/0c/c86be034c211e6baea8955651c7f9f/FundamentalsOfEngineeringExamReview.jpg",
                    title: 'Fundamentals of Engineering Exam Review',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/fe-exam?authProvider=cgbqatar&source=search',
                    description: 'The purpose of this course is to review the material covered in the Fundamentals of Engineering (FE) exam to enable the student to pass it.  ',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d7/60ad90371f11e6a6a20b6ff5b84324/Introduction_EngineeringMechanicsIcon.jpg",
                    title: 'Introduction to Engineering Mechanics',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/engineering-mechanics-statics?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course is an introduction to learning and applying the principles required to solve engineering mechanics problems.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera_assets.s3.amazonaws.com/enterprise/ent-external-apis-video-promo-image.jpg",
                    title: 'Introduction to Software Engineering',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-software-engineering?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course you will gain foundational knowledge of software development, programming, and the many exciting job roles and career paths that the IT industry offers.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/42/c288b0a04d11e688655933b8cc527d/comp-600px-2.jpg",
                    title: 'Engineering Project Management: Initiating and Planning',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/initiating-planning?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'The goal of the course is to give you the tools to initiate a project plan, manage both stakeholders and relationships, organize their team, develop a project charter, and build a business case for a project.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/36/33018f3d3745b79f8ede101591c518/Introduction-to-Data-Engineering-Image.jpg",
                    title: 'Introduction to Data Engineering',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/introduction-to-data-engineering?authProvider=cgbqatar&collectionId=ZWGZp',
                    smallImageUrl: fiveStars,
                    description: 'You will begin this course by understanding what is data engineering as well as the roles that Data Engineers, Data Scientists, and Data Analysts play in this exciting field',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/87/b9af1f64884ec7a9bac226b24ea903/aex_post_secondary_students_1200x1200.jpg",
                    title: 'Introduction to Mechanical Engineering Design and Manufacturing with Fusion 360',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/mechanical-engineering-design-manufacturing?authProvider=cgbqatar&collectionId=ZWGZp',
                    smallImageUrl: fiveStars,
                    description: 'This course explores the design for manufacture workflow and shows how to validate models and create the G code, the programming language needed to instruct the CNC machine on how to move',
                }
            ]
        },
        {
            label: 'القانون والأنظمة',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/22/546e70618340f6a2689e3f83b4f42a/Copyright-v3-01.png",
                    title: 'Copyright Law',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/copyright-law?authProvider=cgbqatar&source=search',
                    description: 'This course is designed for creative professionals — such as screenwriters, musicians, documentary filmmakers or artists — who want to understand the scope and limits of which works can enjoy U.S. copyright protection.',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/db/39793028354087a9a4facb21ec4737/Patent-Law_v3-01.png",
                    title: 'Patent Law',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/patents?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'In our modern technologically-based economy, the creation and enforcement of patent rights can make or break a business.',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/1f/dc09a0b90b4ebcb104403fa92228cc/GIES_Icon_B.png",
                    title: 'Corporate & Commercial Law I: Contracts & Employment Law',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corporate-commercial-law-part1?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This class deals with the business law topics that appear on the CPA exam: Agency, Contracts, Debtor-Creditor Relationships, Government Regulation of Business, and Business Organizations.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/b4/064634f662432293a35e3383d43941/GIES_Icon_B.png",
                    title: 'Corporate & Commercial Law II: Business Forms, Financing & Governmental Regulation',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/corporate-commercial-law-part2?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course is the second course in a two-part series on corporate and commercial law.',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/31/475753c8dd4b49aa004f06c1f1b7d1/shutterstock_758357752.jpg",
                    title: 'مكافحة غسل الأموال | Anti Money Laundering',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/anti-money-laundering?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تقدم هذه الدورة فهمًا أساسيًا لجريمة غسل الأموال وأهميتها الاقتصادية والاجتماعية. تتناول الاتفاقيات الدولية والقواعد لمكافحة هذه الجريمة. إذا كنت ترغب في تعميق فهمك حول هذا الموضوع أو تحتاج إلى تطبيقه في مجال عملك، فإن هذه الدورة توفر لك المعرفة والمهارات الضرورية لمكافحة غسل الأموال بفعالية.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/7d/c2d362b16b484fa62987dc9fcdaa79/shutterstock_512658082.jpg",
                    title: 'نماذج السلوك التنظيمي | Organizational Behavior Models',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/organizational-behavior-models?authProvider=cgbqatar&source=search',
                    smallImageUrl: fiveStars,
                    description: 'تفتح هذه الدورة أفقك نحو فهم أساسي لسلوك الأفراد داخل المنظمات وأثرهم على أداء الفرق. تستعرض الدورة نماذج السلوك التنظيمي، وتركز على قيادة التغيير وأدوار فرق العمل. إذا كنت تسعى لتعميق فهمك أو تحسين مهاراتك في هذا المجال، فإن هذه الدورة ستكون فرصة مثالية لتطوير مهاراتك وتعزيز تأثيرك في بيئة العمل.',
                }
            ]
        },
        {
            label: 'الموارد البشرية',
            cards: [
                {
                    id: 1,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/40/6830008d5311e58a7379988e116de4/IMG_0389-1310.jpg",
                    title: 'Recruiting, Hiring, and Onboarding Employees',
                    smallImageUrl: fiveStars,
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/recruiting-hiring-onboarding-employees?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    description: 'At the outset of the course we will explore the importance of linking recruitment goals with overall company strategy',
                },
                {
                    id: 2,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/a2/4523df3088487ca5a2519ab32642ef/HR-Analytics_CourseraGraphics_1200x1200.jpg",
                    title: 'Human Resources Analytics',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/human-resources-analytics?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course focuses on identifying effective data sources, developing meaningful metrics, designing long-term measures, and applying results in support of organizational strategy and tactics',
                },
                {
                    id: 3,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d6/8e59d08d3311e5a52f5f18e8b42513/IMG_3652-2-378.jpg",
                    title: 'Preparing to Manage Human Resources',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/managing-human-resources?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    smallImageUrl: fiveStars,
                    description: 'This course provides a foundation for developing your own approach to skillfully managing employees by illustrating alternative human resource management (HRM) strategies, introducing the importance of the legal context, and thinking about what motivates employees.',
                },
                {
                    id: 4,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/bb/82f07ea1b848d28329148fd1808e10/HR-Diversity_CourseraGraphics_1200x1200.jpg",
                    title: 'Diversity and Inclusion for HR Professionals',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/diversity-and-inclusion-for-hr-professionals?authProvider=cgbqatar&collectionId=skill~human-resources&source=search',
                    smallImageUrl: fiveStars,
                    description: 'In this course we will review the changing landscape of the workplace and discuss the current change drivers that make Diversity and Inclusion an important focus for your organization',
                },
                {
                    id: 5,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/d6/8e59d08d3311e5a52f5f18e8b42513/IMG_3652-2-378.jpg",
                    title: 'التحضير لإدارة الموارد البشرية',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/managing-human-resources-ar?authProvider=cgbqatar&collectionId=hai9O',
                    smallImageUrl: fiveStars,
                    description: 'تقدم هذه الدورة التدريبية أساسيات إدارة الموظفين، مشيرةً إلى الإستراتيجيات البديلة لإدارة الموارد البشرية، وأهمية السياق القانوني وتحفيز الموظفين، وتعتبر خطوة واقعية لتطوير مهارات إدارة الموارد البشرية في مجالات مثل تعيين الموظفين وإدارة الأداء ومكافأة الموظفين.',
                },
                {
                    id: 6,
                    imageUrl: "https://coursera-course-photos.s3.amazonaws.com/ef/4c845dde814b249108e5f96a648082/Logo-image-8-.png",
                    title: 'Managing Employee Performance',
                    link: 'https://www.coursera.org/programs/m-hd-ldr-l-m-0pl54/learn/employee-performance?authProvider=cgbqatar&collectionId=hai9O',
                    smallImageUrl: fiveStars,
                    description: 'we will discuss the skills and key processes you will need to develop your employees to attain department and organizational goals',
                }
            ]
        },
        // Add more objects for each button as needed
    ];


    const settings = {
        className: "center",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // State to manage the active button and its associated cards
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div className="section2-bg mt-5" id="section2">
            <Container className="section2-header justify-content-center d-flex">
                <div className="text-center mt-auto">
                    <div className="section2-header-title">
                        مجالات التدريب
                    </div>
                </div>
            </Container>
            <Container className="pt-5 pb-5 section2-container justify-content-center">
                <Row>
                    <Col className="col-12 m-auto mb-3">
                        <div className="">
                            <section className="row">
                                {buttonData.map((button, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveButton(index)}
                                        className={
                                            `section2-tab-button mb-2 col-4 ${activeButton === index ? "active" : ""
                                            }`
                                        }
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </section>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 m-auto">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}>
                            {activeButton !== null && buttonData[activeButton].cards.map((elem, index) => {
                                return (
                                    <a href="javascript:void(0)" key={index}>
                                        <Card className="section2-card m-auto shadow-sm flex flex-col justify-between">
                                            <Card.Img variant="top" src={elem.imageUrl} />
                                            <Card.Body className="text-start">
                                                <Card.Title>
                                                    {elem.title}
                                                </Card.Title>
                                                <Card.Text className="align-items-end">
                                                    {elem.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row className="justify-content-between d-flex">
                                                    <Col>
                                                        <button className="rounded-b-md font-bold">
                                                            سجل الآن
                                                        </button>
                                                    </Col>
                                                    <Col className="justify-content-end d-flex">
                                                        <img src={elem.smallImageUrl}
                                                            alt={`${elem.title}`}
                                                            className="mb-2 align-self-end" />
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </a>
                                )
                            })}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section2;
