import AbonementPage from "./page/AbonementPage";
import AboutUsPage from "./page/AboutUsPage";
import FoodPage from "./page/FoodPage";
import MainPage from "./page/MainPage";
import PayPage from "./page/PayPage";
import SettingPage from "./page/SettingPage";
import ProgramPage from "./page/ProgramPage";
import NewsPage from "./page/NewsPage";
import ProfilePage from "./page/ProfilePage";
import NotesPage from "./page/NotesPage";
import MusicPage from "./page/MusicPage";
import MessagePage from "./page/MessagePage";
import FavoritesPage from "./page/FavoritesPage";
import ProgramWritePage from "./page/ProgramWritePage";
import FoodWritePage from "./page/FoodWritePage";
import DraftPage from "./page/DraftPage";
import ProgramDetailPage from "./page/ProgramDetailPage";
import ProgramInfoTrainPage from "./page/ProgramInfoTrainPage";
import ProgramStartPage from "./page/ProgramStartPage";

export const publicRoutes = [
    {path: '/', exact: true, component: MainPage},
    {path: '/about', component: AboutUsPage},
]

export const loginRoutes = [
    {path: '/', exact: true, component: NewsPage},
    {path: '/pay', component: PayPage},
    {path: '/food', component: FoodPage},
    {path: '/setting', component: SettingPage},
    {path: '/abonement', component: AbonementPage},
    {path: '/notes', component: NotesPage},
    {path: '/profile/:id', component: ProfilePage},
    {path: '/music', component: MusicPage},
    {path: '/message', component: MessagePage},
    {path: '/favourite', component: FavoritesPage},
    {path: '/writeProgram', component: ProgramWritePage},
    {path: '/writeFood', component: FoodWritePage},
    {path: '/draft', component: DraftPage},
    {path: '/program/programStart/:id', component: ProgramStartPage},
    {path: '/program/programDetail/:id', component: ProgramDetailPage},
    {path: '/program/programInfoTrain/:id', component: ProgramInfoTrainPage},
    {path: '/program', component: ProgramPage},
]