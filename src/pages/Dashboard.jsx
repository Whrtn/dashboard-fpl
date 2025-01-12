import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full pt-40 container mx-auto">
      <div className="bg-primary text-2xl text-center p-10 rounded-2xl text-white shadow-neutral-400 shadow-lg mb-4">
        <h1 className="font-bold">Dan Wharton</h1>
        <h2>Ballon Dawson</h2>
        <h2>Radius IT</h2>
      </div>
      <div className="flex items-center justify-between gap-10 text-center font-bold mb-4">
        <div className="p-10 w-full rounded-2xl shadow-lg shadow-neutral-400">
          <h1 className="text-2xl ">Team Value</h1>
          <h2 className="text-6xl text-primary">99.2m</h2>
        </div>
        <div className="p-10 w-full rounded-2xl shadow-lg shadow-neutral-400">
          <h1 className="text-2xl ">GW Points</h1>
          <h2 className="text-6xl text-primary">74</h2>
        </div>
        <div className="p-10 w-full rounded-2xl shadow-lg shadow-neutral-400">
          <h1 className="text-2xl ">Total Points</h1>
          <h2 className="text-6xl text-primary">1106</h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10">
        <table className="shadow-lg shadow-neutral-400 w-full border-collapse text-lg">
          <thead className="text-center text-white bg-primary ">
            <tr>
              <th className="py-3">#</th>
              <th className="text-left py-3">Captain</th>
              <th className="py-3">GW</th>
              <th className="py-3">Total</th>
            </tr>
          </thead>
          <tbody className="text-center border-t-3 border-gray-300">
            <tr>
              <td className="pt-3">1</td>
              <td className="text-left pt-3">Dan Wharton - Ballon Dawson</td>
              <td className="pt-3">74</td>
              <td className="pt-3">1106</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-left">Wissa (C)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="pb-3"></td>
              <td className="text-left pb-3">Salah (V)</td>
              <td className="pb-3"></td>
              <td className="pb-3"></td>
            </tr>
          </tbody>
          <tbody className="text-center border-t border-gray-300">
            <tr>
              <td className="pt-3">1</td>
              <td className="text-left pt-3">Dan Wharton - Ballon Dawson</td>
              <td className="pt-3">74</td>
              <td className="pt-3">1106</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-left">Wissa (C)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="pb-3"></td>
              <td className="text-left pb-3">Salah (V)</td>
              <td className="pb-3"></td>
              <td className="pb-3"></td>
            </tr>
          </tbody>
        </table>
        <table className="shadow-lg shadow-neutral-400 w-full border-collapse text-lg">
          <thead className="text-center text-white bg-primary ">
            <tr>
              <th className="py-3">#</th>
              <th className="text-left py-3">Captain</th>
              <th className="py-3">GW</th>
              <th className="py-3">Total</th>
            </tr>
          </thead>
          <tbody className="text-center border-t-3 border-gray-300">
            <tr>
              <td className="pt-3">1</td>
              <td className="text-left pt-3">Dan Wharton - Ballon Dawson</td>
              <td className="pt-3">74</td>
              <td className="pt-3">1106</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-left">Wissa (C)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="pb-3"></td>
              <td className="text-left pb-3">Salah (V)</td>
              <td className="pb-3"></td>
              <td className="pb-3"></td>
            </tr>
          </tbody>
          <tbody className="text-center border-t border-gray-300">
            <tr>
              <td className="pt-3">1</td>
              <td className="text-left pt-3">Dan Wharton - Ballon Dawson</td>
              <td className="pt-3">74</td>
              <td className="pt-3">1106</td>
            </tr>
            <tr>
              <td></td>
              <td className="text-left">Wissa (C)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="pb-3"></td>
              <td className="text-left pb-3">Salah (V)</td>
              <td className="pb-3"></td>
              <td className="pb-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
