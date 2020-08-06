// https://www.terraform.io/docs/providers/oci/r/data_oci_database_data_guard_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "apply_lag": {
        "type": "string",
        "computed": true
      },
      "apply_rate": {
        "type": "string",
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "backup_network_nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "creation_type": {
        "type": "string",
        "computed": true
      },
      "data_guard_association_id": {
        "type": "string",
        "required": true
      },
      "database_admin_password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "database_id": {
        "type": "string",
        "required": true
      },
      "delete_standby_db_home_on_delete": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "hostname": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "peer_data_guard_association_id": {
        "type": "string",
        "computed": true
      },
      "peer_database_id": {
        "type": "string",
        "computed": true
      },
      "peer_db_home_id": {
        "type": "string",
        "computed": true
      },
      "peer_db_system_id": {
        "type": "string",
        "computed": true
      },
      "peer_role": {
        "type": "string",
        "computed": true
      },
      "protection_mode": {
        "type": "string",
        "computed": true
      },
      "role": {
        "type": "string",
        "computed": true
      },
      "shape": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "transport_type": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDatabaseDataGuardAssociationConfig extends TerraformMetaArguments {
  readonly dataGuardAssociationId: string;
  readonly databaseId: string;
}

// Resource

export class DataOciDatabaseDataGuardAssociation extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDataGuardAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_data_guard_association',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataGuardAssociationId = config.dataGuardAssociationId;
    this._databaseId = config.databaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // data_guard_association_id - computed: false, optional: false, required: true
  private _dataGuardAssociationId: string;
  public get dataGuardAssociationId() {
    return this._dataGuardAssociationId;
  }
  public set dataGuardAssociationId(value: string) {
    this._dataGuardAssociationId = value;
  }

  // database_admin_password - computed: true, optional: false, required: true
  public get databaseAdminPassword() {
    return this.getStringAttribute('database_admin_password');
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId: string;
  public get databaseId() {
    return this._databaseId;
  }
  public set databaseId(value: string) {
    this._databaseId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      data_guard_association_id: this._dataGuardAssociationId,
      database_id: this._databaseId,
    };
  }
}
