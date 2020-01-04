// import './lib/loading';

// import './lib/slide-bar';

// import './lib/spin-card';

const req = require.context('./lib/', false, /\.js$/);

const requireAll = requireContext => requireContext.keys().forEach(requireContext);

requireAll(req);