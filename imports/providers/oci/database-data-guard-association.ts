// https://www.terraform.io/docs/providers/oci/r/database_data_guard_association.html
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
        "optional": true,
        "computed": true
      },
      "backup_network_nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "creation_type": {
        "type": "string",
        "required": true
      },
      "database_admin_password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "database_id": {
        "type": "string",
        "required": true
      },
      "delete_standby_db_home_on_delete": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "hostname": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
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
        "optional": true,
        "computed": true
      },
      "peer_role": {
        "type": "string",
        "computed": true
      },
      "protection_mode": {
        "type": "string",
        "required": true
      },
      "role": {
        "type": "string",
        "computed": true
      },
      "shape": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "transport_type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatabaseDataGuardAssociationConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly backupNetworkNsgIds?: string[];
  readonly creationType: string;
  readonly databaseAdminPassword: string;
  readonly databaseId: string;
  readonly deleteStandbyDbHomeOnDelete: string;
  readonly displayName?: string;
  readonly hostname?: string;
  readonly nsgIds?: string[];
  readonly peerDbSystemId?: string;
  readonly protectionMode: string;
  readonly shape?: string;
  readonly subnetId?: string;
  readonly transportType: string;
  /** timeouts block */
  readonly timeouts?: DatabaseDataGuardAssociationTimeouts;
}
export interface DatabaseDataGuardAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseDataGuardAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseDataGuardAssociationConfig) {
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
    this._availabilityDomain = config.availabilityDomain;
    this._backupNetworkNsgIds = config.backupNetworkNsgIds;
    this._creationType = config.creationType;
    this._databaseAdminPassword = config.databaseAdminPassword;
    this._databaseId = config.databaseId;
    this._deleteStandbyDbHomeOnDelete = config.deleteStandbyDbHomeOnDelete;
    this._displayName = config.displayName;
    this._hostname = config.hostname;
    this._nsgIds = config.nsgIds;
    this._peerDbSystemId = config.peerDbSystemId;
    this._protectionMode = config.protectionMode;
    this._shape = config.shape;
    this._subnetId = config.subnetId;
    this._transportType = config.transportType;
    this._timeouts = config.timeouts;
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

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain ?? this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

  // backup_network_nsg_ids - computed: false, optional: true, required: false
  private _backupNetworkNsgIds?: string[];
  public get backupNetworkNsgIds() {
    return this._backupNetworkNsgIds;
  }
  public set backupNetworkNsgIds(value: string[] | undefined) {
    this._backupNetworkNsgIds = value;
  }

  // creation_type - computed: false, optional: false, required: true
  private _creationType: string;
  public get creationType() {
    return this._creationType;
  }
  public set creationType(value: string) {
    this._creationType = value;
  }

  // database_admin_password - computed: false, optional: false, required: true
  private _databaseAdminPassword: string;
  public get databaseAdminPassword() {
    return this._databaseAdminPassword;
  }
  public set databaseAdminPassword(value: string) {
    this._databaseAdminPassword = value;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId: string;
  public get databaseId() {
    return this._databaseId;
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }

  // delete_standby_db_home_on_delete - computed: false, optional: false, required: true
  private _deleteStandbyDbHomeOnDelete: string;
  public get deleteStandbyDbHomeOnDelete() {
    return this._deleteStandbyDbHomeOnDelete;
  }
  public set deleteStandbyDbHomeOnDelete(value: string) {
    this._deleteStandbyDbHomeOnDelete = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this._hostname ?? this.getStringAttribute('hostname');
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[];
  public get nsgIds() {
    return this._nsgIds;
  }
  public set nsgIds(value: string[] | undefined) {
    this._nsgIds = value;
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

  // peer_db_system_id - computed: true, optional: true, required: false
  private _peerDbSystemId?: string;
  public get peerDbSystemId() {
    return this._peerDbSystemId ?? this.getStringAttribute('peer_db_system_id');
  }
  public set peerDbSystemId(value: string | undefined) {
    this._peerDbSystemId = value;
  }

  // peer_role - computed: true, optional: false, required: true
  public get peerRole() {
    return this.getStringAttribute('peer_role');
  }

  // protection_mode - computed: false, optional: false, required: true
  private _protectionMode: string;
  public get protectionMode() {
    return this._protectionMode;
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string;
  public get shape() {
    return this._shape ?? this.getStringAttribute('shape');
  }
  public set shape(value: string | undefined) {
    this._shape = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // transport_type - computed: false, optional: false, required: true
  private _transportType: string;
  public get transportType() {
    return this._transportType;
  }
  public set transportType(value: string) {
    this._transportType = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseDataGuardAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseDataGuardAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      backup_network_nsg_ids: this._backupNetworkNsgIds,
      creation_type: this._creationType,
      database_admin_password: this._databaseAdminPassword,
      database_id: this._databaseId,
      delete_standby_db_home_on_delete: this._deleteStandbyDbHomeOnDelete,
      display_name: this._displayName,
      hostname: this._hostname,
      nsg_ids: this._nsgIds,
      peer_db_system_id: this._peerDbSystemId,
      protection_mode: this._protectionMode,
      shape: this._shape,
      subnet_id: this._subnetId,
      transport_type: this._transportType,
      timeouts: this._timeouts,
    };
  }
}
