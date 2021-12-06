import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip(
    $userId: ID!
    $title: String!
    $description: String
    $location: String!
    $startDate: String!
    $endDate: String!
  ) {
    addTrip(
      userId: $userId
      title: $title
      description: $description
      location: $location
      startDate: $startDate
      endDate: $endDate
    ) {
      title
      description
      location
      startDate
      endDate
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask(
    $tripId: ID!
    $title: String!
    $details: String
    $dueDate: String!
    $status: Boolean!
    $assignee: String!
  ) {
    addTask(
      tripId: $tripId
      title: $title
      details: $details
      dueDate: $dueDate
      status: $status
      assignee: $assignee
    ) {
      title
      details
      dueDate
      status
      assignee
    }
  }
`;

export const ADD_BUDGET = gql`
mutation addBudget ($title:String!, $value:Int!, $purchaseDate:String!, $purchasedBy: String!, $tripId: ID!) {
  addBudget(title: $title, value: $value, purchaseDate: $purchaseDate, purchasedBy: $purchasedBy, tripId: $tripId) {
    title
    value
    purchaseDate
    purchasedBy
  }
}
`;

export const UPDATE_TRIP = gql`
  mutation updateTrip(
    $tripId: ID!
    $title: String
    $description: String
    $location: String
    $startDate: String
    $endDate: String
  ) {
    updateTrip(
      tripId: $tripId
      title: $title
      description: $description
      location: $location
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      title
      description
      location
      startDate
      endDate
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask(
    $tripId: ID!
    $taskId: ID!
    $title: String
    $details: String
    $dueDate: String
    $status: Boolean
    $assignee: String
    ) {
    updateTask(
      tripId: $tripId
      taskId: $taskId
      title: $title
      details: $details
      dueDate: $dueDate
      status: $status
      assignee: $assignee
      ) {
      _id
      title
      details
      dueDate
      status
      assignee
    }
  }
`;

export const UPDATE_BUDGET = gql`
mutation updateBudget($tripId: ID!, $budgetId: ID!, $title: String, $value: Int, $purchaseDate: String, $purchasedBy: String) {
  updateBudget(tripId: $tripId, budgetId:$budgetId, title: $title, value: $value, purchaseDate: $purchaseDate, purchasedBy: $purchasedBy) {
    _id
    title
  	value
    purchaseDate
    purchasedBy
  }
}
`;

export const REMOVE_TRIP = gql`
  mutation removeTrip($tripId: ID!) {
    removeTrip(tripId: $tripId) {
      _id
    }
  }
`;
export const REMOVE_TASK = gql`
  mutation removeTask($tripId: ID!, $taskId: ID!) {
    removeTask(tripId: $tripId, taskId: $taskId) {
      _id
    }
  }
`;

export const REMOVE_BUDGET = gql`
  mutation removeBudget($tripId: ID!, $budgetId: ID!) {
    removeBudget(tripId: $tripId, budgetId: $budgetId) {
      _id
    }
  }
`;
