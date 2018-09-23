#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

class todo_contract : public eosio::contract {
  public:

    todo_contract(account_name self)
      :eosio::contract(self),
      users(_self, _self)
      {}

    // @abi action
    void create(account_name name, const uint64_t age, const std::string& nationality) {
      users.emplace(name, [&](auto& new_user) {
        new_user.name  = name;
        new_user.age = age;
        new_user.nationality = nationality;
      });

      eosio::print("user", name, " created somet xxx hing");
    }

    // @abi action
    void query(const uint64_t age_min, const uint64_t age_max, const std::string& nationality) {

      return;
    }


  /*  

    // @abi action
    void create(account_name author, const uint32_t id, const std::string& description) {
      todos.emplace(author, [&](auto& new_todo) {
        new_todo.id  = id;
        new_todo.description = description;
        new_todo.completed = 0;
      });

      eosio::print("todo#", id, " created");
    }

    // @abi action
    void destroy(account_name author, const uint32_t id) {
      auto todo_lookup = todos.find(id);
      todos.erase(todo_lookup);

      eosio::print("todo#", id, " destroyed");
    }

    // @abi action
    void complete(account_name author, const uint32_t id) {
      auto todo_lookup = todos.find(id);
      eosio_assert(todo_lookup != todos.end(), "Todo does not exist");

      todos.modify(todo_lookup, author, [&](auto& modifiable_todo) {
        modifiable_todo.completed = 1;
      });

      eosio::print("todo#", id, " marked as complete");
    }
  */

  private:
    // @abi table users i64
    struct user {
      account_name name; // account_name is a integer (EOS thingy)
      uint64_t age;
      std::string nationality;

      account_name primary_key() const { return name; }
      EOSLIB_SERIALIZE(user, (name)(age)(nationality))
    };

    typedef eosio::multi_index<N(users), user> user_table;
    user_table users;
};

// EOSIO_ABI(todo_contract, (create)(complete)(destroy))
EOSIO_ABI(todo_contract, (create)(query))