import Button from '../../components/common/Button';

const ProfilePage = () => {
  // Mock user data for display
  const user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Guest',
    joinDate: 'January 2024',
    profileImage: 'https://i.pravatar.cc/150?u=user',
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header / Cover */}
        <div className="h-32 bg-linear-to-r from-primary to-accent"></div>

        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
                <img
                  src={user.profileImage}
                  alt={user.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
              >
                Edit Profile
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.fullName}</h1>
            <p className="text-gray-500">{user.email}</p>
            <div className="mt-4 flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                {user.role}
              </span>
              <span className="text-sm text-gray-500">Joined {user.joinDate}</span>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors group">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Personal Information
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Provide personal details and how we can reach you
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors group">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Login & Security
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Update your password and secure your account
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors group">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Payments & Payouts
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Review payments, payouts, coupons, and gift cards
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors group">
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Notifications
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Choose notification preferences and how you want to be contacted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
