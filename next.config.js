module.exports = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'Cache-control',
                value: 'max-age=0, must-revalidate',
              }
            ],
          },
        ]
      },
}