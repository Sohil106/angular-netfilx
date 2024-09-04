import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  bannerMovie$: Subject<any> = new Subject<any>();
  likedMovie$: Subject<any> = new Subject<any>();

  likedMovieIds$: Subject<Set<number>> = new Subject<Set<number>>();
  constructor() {}

  cards_data = [
    {
      id: 1,
      image: '/assets/cards/card1.jpg',
      title: '/assets/card_titles/title1.png',
      name: 'Kung Fu Panda',
      video: '/assets/videos/video1.mp4',
      overview:
        'In the Valley of Peace, a land in Ancient China inhabited by anthropomorphic animals, a giant panda named Po helps his goose father Mr. Ping run their noodle restaurant, but dreams of fighting alongside the Furious Five – Tigress, Monkey, Crane, Viper and Mantis – a group of kung fu masters who live in the Jade Palace, ...',
    },
    {
      id: 2,
      image: '/assets/cards/card2.jpg',
      title: '/assets/card_titles/title2.png',
      name: 'Squid Game',
      video: '/assets/videos/video2.mp4',
      overview:
        "The series revolves around a secret contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly children's games for the chance to win a ₩45.6 billion prize. The series' title draws from a similarly named Korean children's game.",
    },
    {
      id: 3,
      image: '/assets/cards/card3.jpg',
      title: '/assets/card_titles/title3.png',
      name: 'Squid Challange',
      video: '/assets/videos/video2.mp4',
      overview:
        "Follows contestants as they compete in challenges based on the Korean children's games featured on the Squid Game to win a $4.56 million cash prize.",
    },
    {
      id: 4,
      image: '/assets/cards/card4.jpg',
      title: '/assets/card_titles/title4.png',
      name: 'Jawan',
      video: '/assets/videos/video4.mp4',
      overview:
        'A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion. A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.',
    },
    {
      id: 5,
      image: '/assets/cards/card5.jpg',
      title: '/assets/card_titles/title5.png',
      name: 'The Ghost',
      video: '/assets/videos/video5.mp4',
      overview:
        'An ex-Interpol officer wreaks havoc and sends shock waves across the global underworld. He goes missing in action but resurfaces years later for his beloved family.',
    },
    {
      id: 6,
      image: '/assets/cards/card6.jpg',
      title: '/assets/card_titles/title6.png',
      name: 'Lucifer',
      video: '/assets/videos/video6.mp4',
      overview:
        'Lucifer is the devil but abandons Hell to run a nightclub in Los Angeles, subsequently experiencing massive life changes when he becomes a consultant to the Los Angeles Police Department.',
    },
    {
      id: 7,
      image: '/assets/cards/card7.jpg',
      title: '/assets/card_titles/title7.png',
      name: 'The Railway MEN',
      video: '/assets/videos/video1.mp4',
      overview:
        "The Railway Men is based on railway workers who saved many lives during the 1984 gas tragedy at the chemical company Union Carbide India Limited's plant in Bhopal. The series is inspired by the efforts of station master Ghulam Dastagir and his team at the Bhopal Junction railway station on the night of the tragedy.",
    },
    {
      id: 8,
      image: '/assets/cards/card8.jpg',
      name: 'Young Sheldon',
      video: '/assets/videos/video2.mp4',
      overview:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditut eaque ipsa illo libero quod modi culpa provident doloribus nemo, esse quidem consequatur voluptate excepturi iure molestias,veniam vero maiores odit similique amet obcaecati ipsum et? Undeperferendis fugiat, exercitationem eligendi vero sint possimusdistinctio, aut blanditiis atque illo molestias',
    },
    {
      id: 9,
      image: '/assets/cards/card9.jpg',
      name: 'Sacred Games',
      video: '/assets/videos/video4.mp4',
      overview:
        "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm. Watch all you want. Bollywood icons Saif Ali Khan and Nawazuddin Siddiqui star in this dark thriller series based on Vikram Chandra's novel.",
    },
    {
      id: 10,
      image: '/assets/cards/card10.jpg',
      name: 'Adipurush',
      video: '/assets/videos/video6.mp4',
      overview:
        'Raghav, the prince of the Ikshvaku dynasty from Kosala, tries to rescue his wife, Janaki, from the demon king Lankesh.',
    },
    {
      id: 11,
      image: '/assets/cards/card11.jpg',
      name: 'Sukhee',
      video: '/assets/videos/video2.mp4',
      overview:
        'Fed up with her mundane existence, a housewife gets to relive the past while attending a school reunion.',
    },
    {
      id: 12,
      image: '/assets/cards/card12.jpg',
      name: 'Mission Ganj',
      video: '/assets/videos/video1.mp4',
      overview:
        'Mission Raniganj is based on Jaswant Singh Gill, a brave and diligent mining engineer from IIT Dhanbad who rescued 65 trapped miners at the Raniganj Coalfields in 1989. Principal photography took place from July 2022 to August 2023 in the United Kingdom, Raniganj, Jharkhand and Mumbai.',
    },
    {
      id: 13,
      image: '/assets/cards/card13.jpg',
      name: 'Leo',
      video: '/assets/videos/video5.mp4',
      overview:
        'Things start to take an awry turn for a mild-mannered cafe owner, who gets caught in the crosshairs of a drug cartel.',
    },
    {
      id: 14,
      image: '/assets/cards/card14.jpg',
      name: 'All of Us Are Dead',
      video: '/assets/videos/video6.mp4',
      overview:
        'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected. A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.',
    },
    {
      id: 15,
      image: '/assets/hero_banner.jpg',
      title: '/assets/hero_title.jpg',
      name: 'THE PROTECTOR',
      video: '/assets/videos/video1.mp4',
      overview:
        "The Protector (Turkish: Hakan: Muhafız) is a Turkish drama fantasy series starring Çağatay Ulusoy.[1][2] The show was created by Binnur Karaevli, and the first season was directed by Umut Aral, Gönenç Uyanık, and Can Evrenol.[3] The story is adapted from Turkish novelist Nilüfer İpek Gökdel's mystery novel Karakalem ve Bir Delikanlının Tuhaf Hikayesi (A Strange Story of Charcoal and a Young Man), which was published in 2016.[4] The first season consists of ten episodes and became available for streaming on Netflix on 14 December 2018.[5] The second season consists of eight episodes and became available on 26 April 2019. On 10 June 2019, the series was renewed for seasons 3 and 4.[6] The fourth and last season was released on 9 July 2020.[7]",
    },
  ];
}
