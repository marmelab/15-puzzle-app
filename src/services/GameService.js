const DEFAULT_HEADER_JSON = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 * @class GameService
 */
export default class GameService {
  construct(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * @method new
   * @param {string} mode
   * @description Create a new game
   * @returns {Promise}
   */
  new(mode = 'multi') {
    const url = `${this.baseUrl}/game`;
    const method = 'POST';
    const headers = Object.assign({}, DEFAULT_HEADER_JSON);

    return fetch(url, {
      method,
      headers,
      body: JSON.stringify({
        mode
      })
    })
    .then(res => res.json());
  }

  /**
   * @method new
   * @param {int} id The game's id
   * @param {string} token An authorization token
   * @description Get a game based on it's id
   * @returns {Promise}
   */
  game(id, token) {
    const url = `${this.baseUrl}/game/${id}`;
    const method = 'GET';
    const headers = Object.assign({}, DEFAULT_HEADER_JSON, {
      Authorization: `Bearer  ${token}`
    });

    return fetch(url, {
      method,
      headers: HEADER_JSON
    })
    .then(res => res.json());
  }

  /**
   * @method new
   * @param {int} id The game's id
   * @param {int} tile The tile number
   * @param {string} token An authorization token
   * @description Move a tile from a game
   * @returns {Promise}
   */
  move(id, tile, token) {
    const url = `${this.baseUrl}/game/${id}/move/${tile}`;
    const method = 'PUT';
    const headers = Object.assign({}, DEFAULT_HEADER_JSON, {
      Authorization: `Bearer  ${token}`
    });

    return fetch(url, {
      method,
      headers: HEADER_JSON
    })
    .then(res => res.json());
  }
}
