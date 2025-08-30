import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/user';
import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconArticle from 'shared/assets/icons/article-20-20.svg';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import IconProfile from 'shared/assets/icons/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types';

export const getSidebarItems = createSelector(getUserAuthData, userData => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: IconMain,
      text: 'Main'
    },
    {
      path: RoutePath.about,
      Icon: IconAbout,
      text: 'About'
    }
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}/${userData.id}`,
        Icon: IconProfile,
        text: 'Profile',
        authOnly: true
      },
      {
        path: RoutePath.articles,
        Icon: IconArticle,
        text: 'Articles',
        authOnly: true
      }
    );
  }

  return sidebarItemsList;
});
