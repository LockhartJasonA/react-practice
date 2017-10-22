const initialState = {
  devices: [
      {
          "type": "lock",
          "state": "locked",
          "last_updated_at": 1508386138,
          "slug": "apt-143-lock",
          previousChanges: [
              {
                  "state": "locked",
                  "timestamp": 1508386138
              }
          ]
      },
      {
          "type": "thermostat",
          "state": "locked",
          "last_updated_at": 1508386138,
          "slug": "apt-143-thermostat"
      },
      {
          "type": "detector",
          "state": "locked",
          "last_updated_at": 1508386138,
          "slug": "apt-143-smoke-detector"
      },
      {
          "type": "alarm",
          "state": "locked",
          "last_updated_at": 1508386138,
          "slug": "apt-143-alarm"
      }
  ],
};

export default function (state = initialState, action) {
    let out = initialState;
    let dateTime = Date.now();
    let timestamp = Math.floor(dateTime / 1000);

    switch (action.type) {
        case 'LOCK_DEVICE':
            let lockedIndex = out.devices.findIndex((item) => {
                return item.slug === 'apt-143-lock'
            });

            if(out.devices[lockedIndex].previousChanges.length === 10) {
                out.devices[lockedIndex].previousChanges.shift()
            }

            out.devices[lockedIndex] = Object.assign({}, {
                "type": "lock",
                "state": "locked",
                "last_updated_at": timestamp,
                "slug": "apt-143-lock",
                previousChanges: [
                    ...out.devices[lockedIndex].previousChanges,
                    {
                        "state": "locked",
                        "timestamp": timestamp
                    }
                ]
            });

            break;

        case 'UNLOCK_DEVICE':
            let unlockedIndex = out.devices.findIndex((item) => {
                return item.slug === 'apt-143-lock'
            });

            if(out.devices[unlockedIndex].previousChanges.length === 10) {
                out.devices[unlockedIndex].previousChanges.shift()
            }

            out.devices[unlockedIndex] = Object.assign({}, {
                "type": "lock",
                "state": "unlocked",
                "last_updated_at": timestamp,
                "slug": "apt-143-lock",
                previousChanges: [
                    ...out.devices[unlockedIndex].previousChanges,
                    {
                        "state": "unlocked",
                        "timestamp": timestamp
                    }
                ]
            });

            break;
    }

    out = Object.assign({}, out, ...out);

    return out;
}
