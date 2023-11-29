import { Status, WebData } from './types';

export const DEMO_MODE = true;

export const DEMO_API_DATA: WebData = Object.freeze({
  tickets: [
    {
      id: 'CAM-1',
      title: 'Update User Profile Page UI',
      tag: ['Completion'],
      userId: 'usr-1',
      status: 'Todo',
      priority: 4,
    },
    {
      id: 'CAM-2',
      title:
        'Add Multi-Language Support - Enable multi-language support within the application.',
      tag: ['Feature Request'],
      userId: 'usr-2',
      status: 'In progress',
      priority: 3,
    },
    {
      id: 'CAM-3',
      title: 'Optimize Database Queries for Performance',
      tag: ['Modding'],
      userId: 'usr-2',
      status: 'In progress',
      priority: 1,
    },
    {
      id: 'CAM-4',
      title: 'Implement Email Notification System',
      tag: ['Feature Request', 'Modding', 'Completion', 'A lot of tags'],
      userId: 'usr-1',
      status: 'In progress',
      priority: 3,
    },
    {
      id: 'CAM-5',
      title: 'Enhance Search Functionality',
      tag: ['Feature Request'],
      userId: 'usr-5',
      status: 'In progress',
      priority: 0,
    },
    {
      id: 'CAM-6',
      title: 'Third-Party Payment Gateway',
      tag: ['Feature Request'],
      userId: 'usr-2',
      status: 'Todo',
      priority: 1,
    },
    {
      id: 'CAM-7',
      title: 'Create Onboarding Tutorial for New Users',
      tag: ['Feature Request'],
      userId: 'usr-1',
      status: 'Backlog',
      priority: 2,
    },
    {
      id: 'CAM-8',
      title: 'Implement Role-Based Access Control (RBAC)',
      tag: ['Feature Request'],
      userId: 'usr-3',
      status: 'In progress',
      priority: 3,
    },
    {
      id: 'CAM-9',
      title: 'Upgrade Server Infrastructure',
      tag: ['Feature Request'],
      userId: 'usr-5',
      status: 'Todo',
      priority: 2,
    },
    {
      id: 'CAM-10',
      title: 'Conduct Security Vulnerability Assessment',
      tag: ['Feature Request'],
      userId: 'usr-4',
      status: 'Backlog',
      priority: 1,
    },
  ],
  users: [
    { id: 'usr-1', name: 'Anoop sharma', available: false },
    { id: 'usr-2', name: 'Yogesh', available: true },
    { id: 'usr-3', name: 'Shankar Kumar', available: true },
    { id: 'usr-4', name: 'Ramesh', available: true },
    { id: 'usr-5', name: 'Suresh', available: true },
  ],
});

export const PRIORITY_NUM_TO_WORD = Object.freeze([
  'No Priority',
  'Low',
  'Medium',
  'High',
  'Urgent',
]);

export const PRIORITY_OPTIONS = PRIORITY_NUM_TO_WORD;
export const STATUS_OPTIONS = Object.freeze([
  'Todo',
  'In progress',
  'Backlog',
  'Done',
  'Canceled',
]);

export const LOCALSTORAGE_KEY_GROUPING = 'grouping-option';
export const LOCALSTORAGE_KEY_SORTING = 'sorting-option';

export const TAG_COLORS = Object.freeze([
  '#EC8F5E',
  '#F3B664',
  '#F1EB90',
  '#9FBB73',
]);
export const AVAILABLE_USER_COLOR = '#F1EB90'
export const UNAVAILABLE_USER_COLOR = '#6A6F75'

export const ICON_IDS = Object.freeze({
  SLIDER: 'fa-solid fa-sliders',
  PLUS: 'fa-solid fa-plus',
  HIGH_SIGNAL: 'fa-solid fa-signal',
  CHECK: 'fa-solid fa-circle-check',
  HALF_CIRCLE: 'fa-solid fa-circle-half-stroke',
  EMPTY_CIRCLE: 'fa-regular fa-circle',
  CROSS: 'fa-solid fa-circle-xmark',
  DANGER: 'fa-solid fa-circle-exclamation',
  ELLIPSIS: 'fa-solid fa-ellipsis',
});

export const STATUS_TO_ICON_ID: {[key: string]: any}  = Object.freeze({
  Todo: ICON_IDS.EMPTY_CIRCLE,
  'In progress': ICON_IDS.HALF_CIRCLE,
  Backlog: ICON_IDS.DANGER,
  Done: ICON_IDS.CHECK,
  Canceled: ICON_IDS.CROSS,
});
export const PRIORITY_NUM_TO_ICON_ID: {[key: string]: any} = Object.freeze([
  ICON_IDS.ELLIPSIS,
  ICON_IDS.HIGH_SIGNAL,
  ICON_IDS.HIGH_SIGNAL,
  ICON_IDS.HIGH_SIGNAL,
  ICON_IDS.DANGER,
]);

export const ICON_ID_TO_COLOR: any = Object.freeze({
  'fa-solid fa-sliders': 'black',
  'fa-solid fa-plus': 'black',
  'fa-solid fa-signal': 'black',
  'fa-solid fa-circle-check': 'purple',
  'fa-solid fa-circle-half-stroke': '#ece351',
  'fa-regular fa-circle': 'black',
  'fa-solid fa-circle-xmark': '#c93030',
  'fa-solid fa-circle-exclamation': 'orange',
  'fa-solid fa-ellipsis': 'black',
});
