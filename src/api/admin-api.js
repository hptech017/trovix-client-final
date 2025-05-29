import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";

const apiURL = backendConfig.base + "/admin";
console.log(apiURL);
const token = localStorage.getItem("token");

export async function getPendingComplainHistory() {
  const response = await axios.get(`${apiURL}/support-in-process`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function approveComplainRequest(id, responsePayload) {
  const res = await axios.post(
    `${apiURL}/support/status/approve/${id}`,
    { status: "accept", ...responsePayload },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return res;
}

export async function rejectComplainRequest(id,responsePayload) {
  const response = await axios.post(
    `${apiURL}/support/status/reject/${id}`,
    { status: "reject",...responsePayload },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response;
}

export async function getAllUserList() {
  const response = await axios.get(`${apiURL}/all-users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function userStatusToggle(id) {
  const response = await axios.get(`${apiURL}/user-block/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response;
}
export async function deleteUserAdminEnd(id) {
  const response = await axios.get(`${apiURL}/delete-user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response;
}
export async function getDirectReferralIncome() {
  const response = await axios.get(`${apiURL}/directreferralincome-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getSelfIncomeHistory() {
  const response = await axios.get(`${apiURL}/selfincome-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getMatchingIncomeHistory() {
  const response = await axios.get(`${apiURL}/matchingincome-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getLevelIncomeHistory() {
  const response = await axios.get(`${apiURL}/getAllLevelIncome-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getAllPlanPurchaseList() {
  const response = await axios.get(`${apiURL}/getAllInvestedUsers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function createOrUpdateBanner(payload) {
  const response = await axios.post(`${apiURL}/upload-banner`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getBannerList() {
  const response = await axios.get(`${apiURL}/get-banner`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function adminWithdrawalUpdate(payload) {
  const response = await axios.post(`${apiURL}/withdrawal-update`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function loginWithEmailAdminApi(payload) {
  const response = await axios.post(`${apiURL}/login`, payload, {
    withCredentials: true,
  });
  return response?.data;
}

export async function getAdminInfo() {
  const response = await axios.get(`${apiURL}/getProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getTotalIncomeInfo() {
  const response = await axios.get(`${apiURL}/getAllIncomes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getUsers() {
  const response = await axios.get(`${apiURL}/getAllUsers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getROiHistory() {
  const response = await axios.get(`${apiURL}/get-roi-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getAllBanners() {
  const response = await axios.get(`${apiURL}/get-banners`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function deleteBanner(id) {
  const response = await axios.get(`${apiURL}/delete-banner/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function RefferralIncomeAPi() {
  const response = await axios.get(`${apiURL}/getAllReferalBonus-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

// admin-api.js

export async function topUpUser(payload) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${apiURL}/admin-topup`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (error) {
    console.error("Top-up failed:", error.response?.data || error.message);
    throw error;
  }
}
export async function getUserTopUpHistory() {
  const response = await axios.get(`${apiURL}/topUp-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}