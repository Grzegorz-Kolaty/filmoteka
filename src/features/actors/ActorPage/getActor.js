import { useState, useEffect } from "react";
import axios from "axios";

const PUBLIC_API_URL = "https://api.themoviedb.org/3/person/{person_id}"