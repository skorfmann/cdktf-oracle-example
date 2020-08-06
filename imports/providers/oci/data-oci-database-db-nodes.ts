// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_nodes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_nodes": {
        "type": [
          "list",
          [
            "object",
            {
              "additional_details": "string",
              "backup_vnic_id": "string",
              "db_node_id": "string",
              "db_system_id": "string",
              "fault_domain": "string",
              "hostname": "string",
              "id": "string",
              "maintenance_type": "string",
              "software_storage_size_in_gb": "number",
              "state": "string",
              "time_created": "string",
              "time_maintenance_window_end": "string",
              "time_maintenance_window_start": "string",
              "vnic_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "db_system_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "vm_cluster_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciDatabaseDbNodesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly dbSystemId?: string;
  readonly state?: string;
  readonly vmClusterId?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbNodesFilter[];
}
export class DataOciDatabaseDbNodesDbNodes extends ComplexComputedList {

  // additional_details - computed: true, optional: false, required: true
  public get additionalDetails() {
    return this.getStringAttribute('additional_details');
  }

  // backup_vnic_id - computed: true, optional: false, required: true
  public get backupVnicId() {
    return this.getStringAttribute('backup_vnic_id');
  }

  // db_node_id - computed: true, optional: false, required: true
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }

  // db_system_id - computed: true, optional: false, required: true
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenance_type - computed: true, optional: false, required: true
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // software_storage_size_in_gb - computed: true, optional: false, required: true
  public get softwareStorageSizeInGb() {
    return this.getNumberAttribute('software_storage_size_in_gb');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_window_end - computed: true, optional: false, required: true
  public get timeMaintenanceWindowEnd() {
    return this.getStringAttribute('time_maintenance_window_end');
  }

  // time_maintenance_window_start - computed: true, optional: false, required: true
  public get timeMaintenanceWindowStart() {
    return this.getStringAttribute('time_maintenance_window_start');
  }

  // vnic_id - computed: true, optional: false, required: true
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
}
export interface DataOciDatabaseDbNodesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbNodes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_nodes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._dbSystemId = config.dbSystemId;
    this._state = config.state;
    this._vmClusterId = config.vmClusterId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // db_nodes - computed: true, optional: false, required: true
  public dbNodes(index: string) {
    return new DataOciDatabaseDbNodesDbNodes(this, 'db_nodes', index);
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string | undefined) {
    this._dbSystemId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // vm_cluster_id - computed: false, optional: true, required: false
  private _vmClusterId?: string;
  public get vmClusterId() {
    return this._vmClusterId;
  }
  public set vmClusterId(value: string | undefined) {
    this._vmClusterId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDbNodesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbNodesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      db_system_id: this._dbSystemId,
      state: this._state,
      vm_cluster_id: this._vmClusterId,
      filter: this._filter,
    };
  }
}
