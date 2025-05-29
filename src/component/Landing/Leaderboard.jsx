import React from "react";

const leaderboardData = Array.from({ length: 10 }, (_, index) => ({
  rank: index + 1,
  walletAddress: "-",
  noOfReferrals: "-",
  totalReferral: "-",
  prize: "-",
}));

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 lg:px-10">
      <h1 className="sm:text-6xl text-3xl text-center lg:text-start font-bold mb-10 bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">
  Monthly Referral Leaderboard
</h1>

      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="rounded-2xl">
              <tr className="bg-black text-white text-left 2xl:text-lg">
                <th className="py-3 px-4 w-1/5">Rank</th>
                <th className="py-3 w-1/5">Wallet Address</th>
                <th className="py-3 w-1/5">No of Referrals</th>
                <th className="py-3 w-1/5">Total Referral</th>
                <th className="py-3 w-1/5">Prize</th>
              </tr>
            </thead>
          </table>

          <div className="flex flex-col gap-3 mt-4 text-black">
            {leaderboardData.map((entry, index) => (
              <div
                key={entry.rank}
                className={`flex items-center justify-between px-4 py-3 rounded-3xl ${
                  index === 0
                    ? "bg-[#FD5D31]"
                    : index === 1
                    ? "bg-[#FF7D5A]"
                    : index === 2
                    ? "bg-[#FF9477]"
                    : index === 3
                    ? "bg-[#FFAE98]"
                    : index === 4
                    ? "bg-[#FFCBBD]"
                    : "bg-orange-100"
                }`}
              >
                <span className="w-1/5">{entry.rank}</span>
                <span className="w-1/5">{entry.walletAddress}</span>
                <span className="w-1/5">{entry.noOfReferrals}</span>
                <span className="w-1/5">{entry.totalReferral}</span>
                <span className="w-1/5">{entry.prize}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
