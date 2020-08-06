// https://www.terraform.io/docs/providers/oci/r/data_oci_database_data_guard_associations.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "data_guard_associations": {
        "type": [
          "list",
          [
            "object",
            {
              "apply_lag": "string",
              "apply_rate": "string",
              "availability_domain": "string",
              "backup_network_nsg_ids": [
                "list",
                "string"
              ],
              "creation_type": "string",
              "database_admin_password": "string",
              "database_id": "string",
              "delete_standby_db_home_on_delete": "string",
              "display_name": "string",
              "hostname": "string",
              "id": "string",
              "lifecycle_details": "string",
              "nsg_ids": [
                "list",
                "string"
              ],
              "peer_data_guard_association_id": "string",
              "peer_database_id": "string",
              "peer_db_home_id": "string",
              "peer_db_system_id": "string",
              "peer_role": "string",
              "protection_mode": "string",
              "role": "string",
              "shape": "string",
              "state": "string",
              "subnet_id": "string",
              "time_created": "string",
              "transport_type": "string"
            }
          ]
        ],
        "computed": true
      },
      "database_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface DataOciDatabaseDataGuardAssociationsConfig extends TerraformMetaArguments {
  readonly databaseId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDataGuardAssociationsFilter[];
}
export class DataOciDatabaseDataGuardAssociationsDataGuardAssociations extends ComplexComputedList {

  // apply_lag - computed: true, optional: false, required: true
  public get applyLag() {
    return this.getStringAttribute('apply_lag');
  }

  // apply_rate - computed: true, optional: false, required: true
  public get applyRate() {
    return this.getStringAttribute('apply_rate');
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_network_nsg_ids - computed: true, optional: false, required: true
  public get backupNetworkNsgIds() {
    return this.getListAttribute('backup_network_nsg_ids');
  }

  // creation_type - computed: true, optional: false, required: true
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // database_admin_password - computed: true, optional: false, required: true
  public get databaseAdminPassword() {
    return this.getStringAttribute('database_admin_password');
  }

  // database_id - computed: true, optional: false, required: true
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // delete_standby_db_home_on_delete - computed: true, optional: false, required: true
  public get deleteStandbyDbHomeOnDelete() {
    return this.getStringAttribute('delete_standby_db_home_on_delete');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // peer_data_guard_association_id - computed: true, optional: false, required: true
  public get peerDataGuardAssociationId() {
    return this.getStringAttribute('peer_data_guard_association_id');
  }

  // peer_database_id - computed: true, optional: false, required: true
  public get peerDatabaseId() {
    return this.getStringAttribute('peer_database_id');
  }

  // peer_db_home_id - computed: true, optional: false, required: true
  public get peerDbHomeId() {
    return this.getStringAttribute('peer_db_home_id');
  }

  // peer_db_system_id - computed: true, optional: false, required: true
  public get peerDbSystemId() {
    return this.getStringAttribute('peer_db_system_id');
  }

  // peer_role - computed: true, optional: false, required: true
  public get peerRole() {
    return this.getStringAttribute('peer_role');
  }

  // protection_mode - computed: true, optional: false, required: true
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // transport_type - computed: true, optional: false, required: true
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
}
export interface DataOciDatabaseDataGuardAssociationsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDataGuardAssociations extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDataGuardAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_data_guard_associations',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseId = config.databaseId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_guard_associations - computed: true, optional: false, required: true
  public dataGuardAssociations(index: string) {
    return new DataOciDatabaseDataGuardAssociationsDataGuardAssociations(this, 'data_guard_associations', index);
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId: string;
  public get databaseId() {
    return this._databaseId;
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDataGuardAssociationsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDataGuardAssociationsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: this._databaseId,
      filter: this._filter,
    };
  }
}
