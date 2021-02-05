import React, { lazy, FC } from 'react';
import { PartialRouteObject } from 'react-router';
import WrapperRouteComponent from './config';
import { useRoutes } from 'react-router-dom';
import { useAppState } from 'stores';
import { Spin } from 'antd';
// login别懒加载，会导致页面无数据出来的
import LayoutPage from 'pages/layout';
import LoginPage from 'pages/login/login';
const Dashboard = lazy(() => import(/* webpackChunkName: "dashboard'"*/ 'pages/dashboard'));
const UserList = lazy(() => import(/* webpackChunkName: "userlist'"*/ 'pages/system/user/userlist'));
const MenusList = lazy(() => import(/* webpackChunkName: "menuslist'"*/ 'pages/system/menus/menuslist'));
const RoleList = lazy(() => import(/* webpackChunkName: "role'"*/ 'pages/system/role/role'));
const DashBoardPage = lazy(() => import(/* webpackChunkName: "account'"*/ 'pages/account'));
const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ 'pages/404'));
const Documentation = lazy(() => import(/* webpackChunkName: "404'"*/ 'pages/doucumentation'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ 'pages/guide'));
const RoutePermission = lazy(() => import(/* webpackChunkName: "route-permission"*/ 'pages/permission/route'));
const ButtonPermission = lazy(() => import(/* webpackChunkName: "button-permission"*/ 'pages/permission/button'));
const PermissionConfig = lazy(() => import(/* webpackChunkName: "permission-config'"*/ 'pages/permission/config'));
const AccountPage = lazy(() => import(/* webpackChunkName: "account'"*/ 'pages/account'));
const LineChart = lazy(() => import(/* webpackChunkName: "LineChart'"*/ 'pages/chart/lineChart/LineChart'));
const PieChart = lazy(() => import(/* webpackChunkName: "PieChart'"*/ 'pages/chart/pieChart/PieChart'));
const RadarChart = lazy(() => import(/* webpackChunkName: "RadarChart'"*/ 'pages/chart/radarChart/RadarChart'));
const PillarChart = lazy(() => import(/* webpackChunkName: "PillarChart'"*/ 'pages/chart/pillarChart/PillarChart'));
const AreaChart = lazy(() => import(/* webpackChunkName: "AreaChart'"*/ 'pages/chart/areaChart/AreaChart'));
const CustomField = lazy(() => import(/* webpackChunkName: "CustomField'"*/ 'pages/form/customField/CustomField'));
const ArticleEdit = lazy(() => import(/* webpackChunkName: "ArticleEdit'"*/ 'pages/article/edit/ArticleEdit'));
const ArticleDetail = lazy(() => import(/* webpackChunkName: "ArticleDetail'"*/ 'pages/article/detail/ArticleDetail'));
const ArticleList = lazy(() => import(/* webpackChunkName: "ArticleList'"*/ 'pages/article/list/ArticleList'));

const RenderRouter: FC = () => {
  const { RefreshFCUrl } = useAppState(state => state.user);
  const routeList: PartialRouteObject[] = [
    {
      path: 'login',
      element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" auth={false} />
    },
    {
      path: '',
      element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
      children: [
        {
          path: 'workplace',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/workplace' ? <Dashboard /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'workbench',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/workbench' ? <DashBoardPage /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },

        // 文章模块
        {
          path: 'article/detail',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/article/detail' ? <ArticleDetail /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'article/edit',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/article/edit' ? <ArticleEdit /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'article/list',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/article/list' ? <ArticleList /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },

        // 图表模块
        {
          path: 'chart/areaChart',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/areaChart' ? <AreaChart /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'chart/lineChart',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/lineChart' ? <LineChart /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'chart/pieChart',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/pieChart' ? <PieChart /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'chart/pillarChart',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/pillarChart' ? <PillarChart /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'chart/radarChart',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/radarChart' ? <RadarChart /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },

        {
          path: 'chart/operatorsworks',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/operatorsworks' ? <Documentation /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },
        {
          path: 'chart/customfield',
          element: (
            <WrapperRouteComponent
              element={RefreshFCUrl === '/chart/customfield' ? <CustomField /> : <Spin />}
              titleId="title.dashboard"
            />
          )
        },

        {
          path: 'workbench/boardworks',
          element: <WrapperRouteComponent element={<Guide />} titleId="title.guide" />
        },
        {
          path: 'permission/route',
          element: <WrapperRouteComponent element={<RoutePermission />} titleId="title.permission.route" auth />
        },
        {
          path: 'permission/button',
          element: <WrapperRouteComponent element={<ButtonPermission />} titleId="title.permission.button" />
        },
        {
          path: 'permission/config',
          element: <WrapperRouteComponent element={<PermissionConfig />} titleId="title.permission.config" />
        },
        {
          path: 'account',
          element: <WrapperRouteComponent element={<AccountPage />} titleId="title.account" />
        },
        {
          path: 'systems/useradmin/userlist',
          element: <WrapperRouteComponent element={<UserList />} titleId="title.permission.button" />
        },
        {
          path: 'systems/useradmin/menuslist',
          element: <WrapperRouteComponent element={<MenusList />} titleId="title.permission.button" />
        },
        {
          path: 'systems/useradmin/rolelist',
          element: <WrapperRouteComponent element={<RoleList />} titleId="title.permission.button" />
        },
        {
          path: '*',
          element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />
        }
      ]
    },
    {
      path: '*',
      element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" auth={false} />
    }
  ];
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
