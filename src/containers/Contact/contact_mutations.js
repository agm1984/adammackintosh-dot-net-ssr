import gql from 'graphql-tag'

export default gql`
  mutation contact(
    $message_subject: String!
    $message_content: String!
    $message_senderName: String!
    $message_senderEmail: String!
  ) {
    contact(
      message_subject: $message_subject
      message_content: $message_content
      message_senderName: $message_senderName
      message_senderEmail: $message_senderEmail
    ) {
      message_subject
      message_content
      message_senderName
      message_senderEmail
    }
  }
`
