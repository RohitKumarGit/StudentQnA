import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  let { id } = useParams();

  // TODO: Fetch user from database where user_id === id. Else 404 Not Found.

  return id;
}
