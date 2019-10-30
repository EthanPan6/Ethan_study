<template>
  <a-table :dataSource="data">
    <a-table-column-group>
      <span slot="title" style="color: #1890ff">Name</span>
      <a-table-column data-index="firstName" key="firstName">
        <span slot="title" style="color: #1890ff">First Name</span>
      </a-table-column>
      <a-table-column title="Last Name" data-index="lastName" key="lastName" />
    </a-table-column-group>
    <a-table-column title="Age" data-index="age" key="age" />
    <a-table-column title="Address" data-index="address" key="address" />
    <a-table-column title="Tags" data-index="tags" key="tags">
      <template slot-scope="tags">
        <span>
          <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
        </span>
      </template>
    </a-table-column>
    <a-table-column title="Action" key="action">
      <template slot-scope="text, record">
        <span>
          <a href="javascript:;">Action 一 {{record.firstName}}</a>
          <a-divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      </template>
    </a-table-column>
  </a-table>
</template>
<script>
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default {
  data() {
    return {
      data
    };
  }
};
</script>
