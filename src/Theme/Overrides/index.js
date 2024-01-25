//

import Card from "./Card";
import Button from "./Button";
// import Paper from './Paper';
import Input from "./Input";
// import Table from './Table';
// import Tooltip from './Tooltip';
// import Backdrop from './Backdrop';
// import Typography from './Typography';
// import Autocomplete from './Autocomplete';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Button(theme),
    Card(theme),
    // Table(theme),
    Input(theme)
    // Paper(theme),
    // Tooltip(theme),
    // Backdrop(theme),
    // Typography(theme),
    // Autocomplete(theme)
  );
}
