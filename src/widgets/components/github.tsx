import { jalaliDate } from "../../utils/functions";
import { SettingsForm } from "../forms/setting.forms";
import { useGithubInfo } from "../hooks/github.hook";
export const GithubInfoBox = () => {

    const { user , loading, error } = useGithubInfo();

    if (loading) {
        return <div className="p-4">در حال بارگذاری...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-500">خطا: {error}</div>;
    }

    if (!user) {
        return <SettingsForm />;
    }
  return (
    <div className="p-4 bg-gradient-to-bl from-purple-600 to-black rounded-lg shadow-md">
      <div className="flex items-center mb-4 space-x-4">
        <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-bold">{user.login}</h2>
          <p className="text-sm text-white">{user.bio}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>ریپازیتوری های عمومی : {user.public_repos}</div>
        <div>دنبال کنندگان: {user.followers}</div>
        <div>دنبال شوندگان: {user.following}</div>
        <div>اخرین کامیت: {jalaliDate(user.updated_at)}</div>
        <div>وضعیت استخدام: {user.hireable ? 'آماده به کار' : 'مشغول به کار'}</div>
      </div>
      <a
        href={user.html_url}
        target="_blank"
        className="block mt-4"
        rel="noreferrer"
      >
        <button className="p-2 rounded-md bg-purple-300 text-black cursor-pointer justify-center">پروفایل من</button>
      </a>
    </div>
  );
};
